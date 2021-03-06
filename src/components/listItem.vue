<template>
    <li :class="{selected: bookmark.contextmenu}"
        :style="setStyle"
        @contextmenu="onContextmenu($event, bookmark)">

        <!-- 书签 -->
        <a v-if="bookmark.url" :X-href="bookmark.url" target="_blank" @dblclick="open(bookmark.url)">
            <img :src="bookmark.url | getFavicon" class="favicon">
            <span>
                <span class="tit">{{bookmark.title}}</span>
                <span class="url">{{bookmark.url}}</span>
                <slot name="addition"></slot>
            </span>
        </a>

        <!-- 文件夹 -->
        <router-link v-else :to="`/node/${bookmark.id}`">
            <img src="../img/folder-icon.png" class="favicon">
            <span class="">{{bookmark.title}}</span>
        </router-link>

        <contextmenu v-model="bookmark.contextmenu">
            <slot name="default">
                <div class="contextmenu">
                    <div>
                        <button @click="open(bookmark.url)" title="查看链接">
                            <!--<i class="far fa-eye"></i> -->
                            查看链接
                        </button>
                    </div>
                    <div>
                        <button @click="search(bookmark)" title="搜索相关">
                            <!--<i class="far fa-lightbulb"></i> -->
                            搜索相关
                        </button>
                    </div>
                    <div>
                        <button @click="createSubFolder(bookmark)" v-if="!bookmark.url" title="新建子文件夹">
                            <!--<i class="fas fa-folder-plus"></i>--> 新建子文件夹
                        </button>
                    </div>
                    <div>
                        <button @click="edit(bookmark)"><!--<i class="fas fa-edit"></i>-->编辑</button>
                    </div>
                    <div>
                        <button @click="remove(bookmark)"><!--<i class="far fa-trash-alt"></i>--> 删除</button>
                    </div>
                </div>
            </slot>
        </contextmenu>

        <!-- 隐藏菜单 -->
        <div class="contextmenu2">
            <slot name="default">
                <button @click="open(bookmark.url)" title="查看链接"><i class="far fa-eye"></i></button>
                <button @click="search(bookmark)" title="搜索相关"><i class="far fa-lightbulb"></i></button>
                <button @click="removeShortcut(bookmark)" title="移除快捷方式" v-if="bookmark.shortcut"><i class="fas fa-unlink"></i></button>
                <button @click="addShortcut(bookmark)" title="加入快捷方式" v-else><i class="fas fa-link"></i></button>
                <button @click="createSubFolder(bookmark)" v-if="!bookmark.url" title="新建子文件夹">
                    <i class="fas fa-folder-plus"></i>
                </button>
                <button @click="edit(bookmark.id)" title="编辑"><i class="far fa-edit"></i></button>
                <button @click="remove(bookmark)" title="删除"><i class="far fa-trash-alt"></i></button>
            </slot>
        </div>
    </li>
</template>

<script>
    import { bookmarks, tabs } from '../libs/chrome/index'
    import bookmarkManager from '../libs/bookmarkManager'
    import editBookmark, { createSubFolder } from '../mixins/editBookmark'
    import getDb from '../libs/db'
    import setting from '../libs/setting'
    import { mapState } from 'vuex'
    import settingDb from '../libs/setting'

    export default {
        name: 'listItem',
        props: {
            bookmark: Object,
        },
        data () {
            return {
                styleObj: {}
            }
        },
        created () {
            this._setStyle();
        },
        computed: {
            ...mapState({
                ui: 'ui'
            }),
            setStyle () {
                let styleObj = this.styleObj;
                let level = this.bookmark.level;
                if (level) {
                    let color = this.$root.levelsColorMap[level];
                    styleObj.backgroundColor = this.$hex2Rgb(color, 0.3);
                }
                return styleObj;
            },
        },
        methods: {
            createSubFolder (bookmark) {
                createSubFolder(bookmark)
            },
            edit (id) {
                bookmarkManager.get(id).then((bookmark) => {
                    console.log('edit: ', bookmark);
                    editBookmark(bookmark);
                });
            },
            remove (bookmark) {
                bookmarks.remove(bookmark)
                this.$emit('contextmenu', 'remove', bookmark)
            },
            addShortcut (bookmark) {
                //shortcutDb.set(bookmark)
                //this.$set(this.bookmark, 'shortcut', true)
            },
            removeShortcut (bookmark) {
                //shortcutDb.remove(bookmark)
                //this.$set(this.bookmark, 'shortcut', false)
                //this.$emit('shortcut.remove', bookmark)
            },
            open (url) {
                tabs.create({url, selected: true})
                return false
            },
            search (bookmark) {
                let arr = bookmark.url.match(/^https?:\/\/([\w.]+)/) || [];
                let query = arr[1];
                query && this.$router.push({name: 'search', params: {query}})
            },
            onContextmenu (e, bookmark) {
                e.preventDefault();
                this.$set(bookmark, 'contextmenu', e)
            },
            _setStyle () {
                if (this.ui.list.showType === 'grid') {
                    let size = this.$root.settingMap['gridSize'] || 5;
                    let count = 100 - size;
                    let w = count / size;
                    let h = count / size;
                    w = `0 0 ${ w }%`;
                    h = `calc(${ h }vw)`;
                    this.styleObj.flex = w;
                    this.styleObj.height = h;
                }
            }
        },
        watch: {
            'ui.list.showType' (newVal, oldVal) {
                this._setStyle();
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../css/basic/src/basic.scss";

    .selected, .selected > a:hover {
        background: $activeColor2 !important;
        color: #fff;
    }

    li {
        border-left: solid 2px transparent;
    }

    .contextmenu {
        > * {
            @include flex-middle;
            margin: 0.25rem 0;
            padding: 0 1rem;

            > * {
                flex: 1;
                text-align: left !important;
            }

            i {
                margin-right: 1rem;
                color: $activeColor2;
            }

            &:hover {
                background: $activeColor2;

                button, i {
                    color: #fff;
                }
            }
        }
    }
</style>
