<template>
    <div class="bookmarkEditor">
        <h3>修改书签</h3>
        <div>
            <div class="field">
                <label class="label">title</label>
                <div class="control">
                    <input class="input" type="text" v-model="bookmark.title">
                </div>
            </div>

            <div class="field" v-if="bookmark.url">
                <label class="label">url</label>
                <div class="control">
                    <input class="input" type="text" v-model="bookmark.url">
                </div>
            </div>

            <div class="field">
                <label class="label">tag</label>
                <div class="control">
                    <input class="input" type="text" v-model="bookmark.tag">
                </div>
                <div class="help">
                    <label class="checkbox" v-for="(v, i) in tags" :key="v" :for="'tag'+i">
                        <input type="checkbox" name="tag" :id="'tag'+i" :value="v" @change="setTag" v-model="tag">
                        {{v}} &nbsp;
                    </label>
                </div>
            </div>

            <div class="field">
                <label class="label">level</label>
                <div class="control">
                    <label class="radio" v-for="v in levels">
                        <input type="radio" name="level" :value="v" :checked="v===bookmark.level" v-model="bookmark.level">
                        {{ v }}级
                    </label>
                </div>
            </div>

            <div class="field">

                <div class="field has-addons" @click="selectFolder">
                    <div class="control">
                        <a class="button is-info">
                            选择文件夹
                        </a>
                    </div>
                    <div class="control is-expanded">
                        <input class="input" type="text" readonly v-model="bookmark.folderName">
                    </div>
                </div>
            </div>

            <div class="field is-grouped is-grouped-centered">
                <p class="control">
                    <button class="button is-light" @click="cancel"> 取消</button>
                </p>
                <p class="control">
                    <button class="button is-primary" @click="save" v-if="bookmark.id"> 保存</button>
                    <button class="button is-primary" @click="save" v-else> 新建</button>
                </p>
                <p class="help">
                    {{ msg }}
                </p>
            </div>
        </div>

        <!-- 弹出层 -->
        <div class="layer" :class="{show:isSelectFolder}">
            <div style="display: flex; flex-flow: column; width:100%; height: 100%;">
                <div style="text-align:right;">
                    <button class="button is-info" @click="isSelectFolder=false">取消</button>
                </div>
                <div style="flex: 1;">
                    <component :is="c" @selectFolderChange="onSelectFolderChange"></component>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import TreeMap from '../components/views/tree'
    import _ from 'lodash'
    import bookmarkManager from '../libs/bookmarkManager'
    import setting from '../libs/setting'

    export default {
        name: 'bookmarkEditor',
        components: {
            TreeMap,
        },
        props: {
            bookmark: Object,
        },
        data () {
            return {
                msg: '',
                oldBookmark: {},
                levels: [],
                tags: [],
                tag: [],
                isSelectFolder: false,
                c: null
            }
        },
        created () {
            console.log(4444, this.bookmark)
            this.oldBookmark = JSON.parse(JSON.stringify(this.bookmark));
            this.getData();
        },
        methods: {
            save () {
                console.log('bookmarkManager.set() =>', this.bookmark, this.oldBookmark)
                bookmarkManager.set(this.bookmark, this.oldBookmark).then(data => {
                    console.log('update', data)
                    this.close();
                })
            },
            cancel () {
                this.close()
            },
            close () {
                console.log('emit close', arguments)
                this.$emit('close')
            },
            setTag () {
                if (this.tag.length) {
                    let oldTag = this.bookmark.tag;
                    let oldTags = oldTag ? oldTag.split(/\s*,\s*/img) : [];
                    let arr = oldTags.concat(this.tag);
                    arr = _.uniq(arr);
                    this.bookmark.tag = arr.join(',');
                }
            },
            selectFolder () {
                this.isSelectFolder = true;
                this.c = 'TreeMap';
            },
            onSelectFolderChange (folder, path) {
                console.info('selected folder:', folder)
                if (typeof folder === 'object') {
                    this.bookmark.parentId = folder.id;
                    this.bookmark.folderName = `${ path.join(' / ') }`;
                    this.isSelectFolder = false;
                } else {

                }
            },
            async getData () {
                this.levels = await setting.get('levels');
                this.tags = await bookmarkManager.getAllTag().then((data) => {
                    return Object.keys(data);
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../css/basic/src/basic.scss";

    .bookmarkEditor {
        padding: $gap2;
    }

    /deep/ .layer {
        position: fixed;
        z-index: 100000;
        top: 100%;
        left: 0;
        width: 100%;
        height: 100%;
        padding: $gap;
        background: #fff;
        transition: all 0.5s;
        opacity: 0;

        &.show {
            top: 0;
            opacity: 1;
        }
    }
</style>
