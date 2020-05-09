<template>
    <div>
        <div class="box">
            <button class="button" @click="download">备份所有数据</button>
            <label class="button" @click="upload" for="upload">恢复数据</label>
            <button class="button" @click="clean">数据清洗: 插件异常的情况下尝试修复</button>
            <button class="button" @click="DelDuplicate">清除重复书签</button>
            <button class="button" @click="ls">临时脚本</button>

            <input type="file" id="upload" name="upload" @change="upload" ref="file" style="position:absolute; left:-3000px;">

            <transition name="fade">
                <div class="box" v-if="msg">
                    <div style="white-space: pre;"> {{ msg }}</div>
                </div>
            </transition>
        </div>

        <div class="box">
            <div class="field has-addons">
                <div class="control">
                    <a class="button is-info">
                        设置显示最近数量，回车确认
                    </a>
                </div>
                <div class="control is-expanded">
                    <input class="input" type="number" v-model="recentCount" @change="onRecentCountChange">
                </div>
            </div>
        </div>

        <div class="box">
            <div class="field has-addons">
                <div class="control">
                    <a class="button is-info">
                        设置grid数量多少，回车确认
                    </a>
                </div>
                <div class="control is-expanded">
                    <input class="input" type="number" v-model="gridSize" @change="onGridSizeChange">
                </div>
            </div>
        </div>

        <setting-color></setting-color>
    </div>
</template>

<script>
    import settingColor from './c/settingColor'
    import { downloads, bookmarks } from '../../libs/chrome'
    import getDb, { Db } from '../../libs/db'
    import settingDb from '../../libs/setting'
    import bookmarkManager from '../../libs/bookmarkManager'

    const jbmDb = getDb('jbm');

    export default {
        name: 'setting',
        components: {
            settingColor
        },
        data () {
            return {
                msg: '',
                recentCount: 200,
                gridSize: 5
            }
        },
        created () {
            this.getData();
        },
        methods: {
            async ls () {
                let r = await jbmDb.get();
                for (let i in r) {
                    let item = r[i];
                    console.log(item)
                    /*                    item.visit = item.count;
                                        delete item.title;
                                        delete item.url;
                                        delete item.dateAdded;
                                        delete item.index;
                                        delete item.folderName;*/
                    //jbmDb.update(item);
                }

            },
            // 用于处理自定义数据和书签数据不匹配的情况
            async clean () {
                let that = this
                that.msg = '已清理无效ID:'

                async function cb (db, i) {
                    let dbo = await db.get()
                    let idArray = Object.keys(dbo)
                    for (let id of idArray) {
                        let b = await bookmarks.get(id)
                        if (!b) {
                            console.log(id, dbo[id])
                            db.remove(id)
                            that.msg += ` ${ id }; `
                        }
                    }
                }

                [jbmDb].forEach(cb);
            },
            download () {
                let that = this
                let data = Db.getAll()
                let str = JSON.stringify(data)
                let url = window.URL.createObjectURL(new Blob([str], {type: 'text/plain;charset=utf-8'}));
                downloads.download({
                    filename: 'bookmarks2-bak.json',
                    url: url
                }).then(data => {
                    console.log(data)
                    that.msg = '备份已下载!'
                })
            },
            upload () {
                let that = this;
                let dom = this.$refs.file
                let file = dom.files[0];
                if (!file) return
                console.log(file)
                let reader = new FileReader
                reader.onload = function (e) {
                    let data = this.result
                    data = JSON.parse(data)
                    console.log(data)
                    Db.init(data)
                    that.msg = '恢复成功!'
                }
                reader.readAsText(file)
            },
            // 清理重复的书签
            async DelDuplicate () {
                this.msg = '清除';
                let bookmarkArr = await bookmarkManager.getAllInList();
                let resultMap = {};
                bookmarkArr.forEach((bookmark) => {
                    let key = bookmark.url;     //btoa(bookmark.url).substr(-19, 17);
                    let arr = resultMap[key] = resultMap[key] || [];
                    arr.push(bookmark);
                });

                let resultStr = '';
                let resultCount = 0;
                for (let i in resultMap) {
                    let arr = resultMap[i];
                    if (arr.length > 1) {
                        console.log(arr);
                        let arr2 = arr.slice(1);
                        arr2.forEach((item, i) => {
                            bookmarkManager.remove(item);
                            resultStr += ` ${ item.id }:${ item.title }\r\n`;
                            resultCount += 1;
                        });
                    }
                }
                this.msg += `${resultCount}项.`;
                if(resultCount){
                    this.msg += '\r\n';
                    this.msg += resultStr;
                    this.msg += '可以在回收站查看清理的重复书签.';
                }else{
                    this.msg = '无重复书签.';
                }
            },
            async getData () {
                this.recentCount = await settingDb.get('recentCount') || this.recentCount;
                this.gridSize = await settingDb.get('gridSize') || this.gridSize;
            },
            async onRecentCountChange () {
                let result = await settingDb.set('recentCount', Number(this.recentCount));
                this.$msg('已经更新！');
                console.log(result);
            },
            async onGridSizeChange () {
                let result = await settingDb.set('gridSize', Number(this.gridSize));
                this.$msg('已经更新！');
                console.log(result);
            }
        },

    }
</script>

<style lang="scss" scoped>
    .box {
        margin-top: 2em;
    }
</style>
