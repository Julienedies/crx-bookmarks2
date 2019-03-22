<template>
    <div>
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">title</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input class="input" type="text" v-model="c_bookmark.title">
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">url</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input class="input" type="text" v-model="c_bookmark.url">
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">文件夹</label>
            </div>
            <div class="field-body">
                <div class="field has-addons">
                    <div class="control is-expanded">
                        <input class="input" type="text" readonly v-model="c_bookmark.folderName">
                    </div>
                    <div class="control">
                        <a class="button is-info" @click="selectFolder">
                            选择文件夹
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label">
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <button class="button is-primary" @click="update" v-if="c_bookmark.id">
                            更新
                        </button>
                        <button class="button is-primary" @click="add" v-else>
                            添加
                        </button>
                        <button class="button is-primary" @click="remove" v-show="c_bookmark.id">
                            删除
                        </button>
                        <button class="button" @click="addShortcut" v-show="c_bookmark.id">添加快捷方式</button>
                        <button class="button" @click="$emit('close')">返回</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="layer" :class="{show:isSelectFolder}">
            <div style="display: flex; flex-flow: column; width:100%; height: 100%;">
                <div class="box">
                    <button class="button" @click="isSelectFolder=false">返回</button>
                </div>
                <div style="flex: 1;">
                    <component :is="c" @selectFolderChange="onSelectFolderChange"></component>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import TreeMap from '../../components/views/tree'
    import { bookmarks, tabs } from '../../libs/chrome'
    import { Db } from '../../libs/db'

    const shortcutDb = new Db('shortcut')

    export default {
        name: 'setBookmark',
        components: {
            TreeMap,
        },
        props: {
            bookmark: Object
        },
        data () {
            return {
                c: '',
                c_bookmark: {
                    id: null,
                    parentId: null,
                    title: '',
                    url: '',
                    folderName: ''
                },
                isSelectFolder: false,
            }
        },
        methods: {
            add () {
                bookmarks.add(this.c_bookmark).then((data) => {
                    console.log('added', data, this)
                    this.setBookmark(data)
                    this.$msg('已经添加!')
                })
            },
            update () {
                bookmarks.update(this.c_bookmark).then((data) => {
                    console.log('update', data)
                    this.setBookmark(data)
                    this.$msg('更新完成!')
                })
            },
            remove () {
                bookmarks.remove(this.c_bookmark).then((data) => {
                    this.c_bookmark.id = null
                    this.$msg('已经删除!')
                })
            },
            selectFolder () {
                this.isSelectFolder = true
                this.c = 'TreeMap'
            },
            addShortcut () {
                shortcutDb.set(this.c_bookmark).then(data => {
                    this.$msg('添加完成!')
                })
            },
            onSelectFolderChange (folder, path) {
                console.info('selected folder:', folder)
                if (typeof folder === 'object') {
                    this.c_bookmark.parentId = folder.id
                    this.c_bookmark.folderName = `${ path.join(' / ') }`
                    this.isSelectFolder = false
                } else {
                    delete this.c_bookmark.parentId
                    this.c_bookmark.folderName = ''
                }
            },
            setBookmark (newVal) {
                this.c_bookmark = Object.assign({}, this.c_bookmark, newVal)
            }
        },
        watch: {
            'bookmark' (newVal, oldVal) {
                this.setBookmark(newVal)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .control {
        button {
            margin-right: 3rem;
        }
    }
</style>
