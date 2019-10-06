<template>
    <div style="height: 100%; position: fixed; left:0; top:0; bottom:0; right:0; background: #fff; overflow-y: scroll;">
        <div class="box" style="height:100%; display: flex; flex-flow:column;">

            <header>
                <div style="padding:0 0 12px 0; text-align:right; display: flex; justify-content: space-between;">
                    <div style="display: flex; justify-content: flex-start;">
                        <button class="button" :class="{'is-info':c==='home'}" @click="c='home'">快捷</button>
                        <button class="button" :class="{'is-info':c==='recent'}" @click="c='recent'">最近</button>
                        <button class="button" :class="{'is-info':c==='hot'}" @click="c='hot'">常用</button>
                        <button class="button" :class="{'is-info':c==='tree'}" @click="c='tree'">目录</button>
                    </div>

                    <div>
                        <search-bar></search-bar>
                    </div>

                    <div style="display: flex; justify-content: flex-end;">
                        <button class="button" @click="isSetBookmark=1" v-if="bookmark.id">修改书签</button>
                        <button class="button" @click="isSetBookmark=1" v-else>添加书签</button>
                        <button class="button" @click="open">打开书签管理器</button>
                    </div>
                </div>
            </header>

            <div style="flex:1;">
                <!--<component :is="c"></component>-->
                <router-view></router-view>
            </div>

        </div>

        <div class="layer" :class="{show:isSetBookmark}">
            <!--<setBookmark :bookmark="bookmark" @close="isSetBookmark=false"></setBookmark>-->
            <bookmark-editor :bookmark="bookmark" @close="isSetBookmark=false"></bookmark-editor>
        </div>
    </div>
</template>

<script>
    import home from '../../components/views/home'
    import recent from '../../components/views/recent'
    import hot from '../../components/views/hot'
    import searchBar from '../../components/searchBar'
    import bookmarkEditor from '../../components/bookmarkEditor'
    import setBookmark from './setBookmark'

    import { bookmarks, tabs } from '../../libs/chrome'
    import getDb from '../../libs/db'
    import bookmarkManager from '../../libs/bookmarkManager'

    const visitDb = getDb('visit')
    const shortcutDb = getDb('shortcut')

    export default {
        name: 'App',
        components: {
            bookmarkEditor,
            setBookmark,
            home,
            recent,
            hot,
            searchBar
        },
        data () {
            return {
                c: '',
                isSetBookmark: false,
                isSelectFolder: false,
                bookmark: {},
            }
        },
        created () {
            this.getBookmarkByTab();
            //this.$router.push({name: this.c})
        },
        mounted () {
        },
        computed: {},
        methods: {
            open () {
                tabs.query({title: '书签管理器crx'}).then((arr) => {
                    let tab = arr && arr[0]
                    console.info(arr)
                    if (tab) {
                        tabs.update(tab.id, {selected: true})
                    } else {
                        tabs.create({url: './dist/app.html#/recent', selected: true})
                    }
                })
            },
            async getBookmarkByTab () {
                let tab = await tabs.getSelected()
                console.log('#tab is', tab)
                let bookmarkArray = await bookmarks.search(tab.url)
                console.log('#search', bookmarkArray)
                bookmarkArray = bookmarkArray || []
                bookmarkArray = bookmarkArray.filter((item) => {
                    return item.url === tab.url
                })
                if (bookmarkArray && bookmarkArray.length) {
                    this.bookmark = await bookmarkManager.get(bookmarkArray[0]);
                    bookmarks.get(this.bookmark.parentId).then((data) => {
                        this.$set(this.bookmark, 'folderName', data[0].title)
                    })
                } else {
                    this.bookmark = {title: tab.title, url: tab.url}
                }
            },
        },
        watch: {
            c (to) {
                this.$router.push({name: to});
            },
            '$route' (to, from) {
                console.log('watch $route', to, from)
            },
        }
    }
</script>

<style lang="scss" scoped>
    /deep/ .layer {
        position: fixed;
        z-index: 100000;
        top: 100%;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 1em;
        background: #fff;
        transition: all 0.5s;
        opacity: 0;

        &.show {
            top: 0;
            opacity: 1;
        }
    }
</style>
