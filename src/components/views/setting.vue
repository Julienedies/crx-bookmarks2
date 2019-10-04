<template>
    <div>
        <button class="button" @click="download">备份配置</button>
        <label class="button" @click="upload" for="upload">恢复配置</label>
        <button class="button" @click="clean">数据清洗</button>
        <button class="button" @click="ls">临时脚本</button>

        <input type="file" id="upload" name="upload" @change="upload" ref="file"
               style="position:absolute; left:-3000px;">
        <transition name="fade">
            <div class="box" v-if="msg"> {{ msg }}</div>
        </transition>
    </div>
</template>

<script>
    import { downloads, bookmarks } from '../../libs/chrome'
    import getDb, { Db } from '../../libs/db'
    const jbmDb = getDb('jbm');

    export default {
        name: 'setting',
        data () {
            return {
                msg: ''
            }
        },
        methods: {
            async ls () {
                let r = await jbmDb.get();
                for(let i in r){
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
                async function cb(db, i) {
                    let dbo = await db.get()
                    let idArray = Object.keys(dbo)
                    for (let id of idArray) {
                        let b = await bookmarks.get(id)
                        if (!b) {
                            console.log(id, dbo[id])
                            db.remove(id)
                            that.msg += ` ${id}; `
                        }
                    }
                }

                [jbmDb].forEach(cb)
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    .box {
        margin-top: 2em;
    }
</style>
