<template>
    <div class="box">

        <div>

            <div style="text-align:right; padding:0.5rem;">
                <button class="button" @click="isSetBookmark=1" v-if="bookmark.id">修改书签</button>
                <button class="button" @click="isSetBookmark=1" v-else>添加书签</button>
                <button class="button" :class="{'is-info':c==='shortcut'}" @click="c='shortcut'">快捷</button>
                <button class="button" :class="{'is-info':c==='recent'}" @click="c='recent'">最近</button>
                <button class="button" :class="{'is-info':c==='hot'}" @click="c='hot'">常用</button>
                <button class="button" @click="open">打开书签管理器</button>
            </div>

            <div class="">
                <component :is="c"></component>
            </div>

            <div class="layer" :class="{show:isSetBookmark}">
                <setBookmark :bookmark="bookmark" @close="isSetBookmark=false"></setBookmark>
            </div>

        </div>
    </div>
</template>

<script>
    import shortcut from '../../components/views/shortcut'
    import recent from '../../components/views/recent'
    import hot from '../../components/views/hot'

    import { bookmarks, tabs } from '../../libs/chrome'
    import getDb from '../../libs/db'
    import setBookmark from './setBookmark'

    const visitDb = getDb('visit')

    export default {
        name: 'App',
        components: {
            setBookmark,
            shortcut,
            recent,
            hot
        },
        data () {
            return {
                c: 'shortcut',
                isSetBookmark: false,
                isSelectFolder: false,
                bookmark: {},
            }
        },
        created () {
            this.getBookmarkByTab()
        },
        mounted () {
            this.getData()
        },
        computed: {},
        methods: {
            async getData () {
                //this.recentBookmarkArray = await bookmarks.getRecent(100)
            },
            open () {
                tabs.create({url: './dist/app.html', selected: true})
            },
            async getBookmarkByTab () {
                let tab = await tabs.getSelected()
                let bookmarkArray = await bookmarks.search(tab.url)
                if (bookmarkArray && bookmarkArray.length === 1) {
                    this.bookmark = bookmarkArray[0]
                    bookmarks.get(this.bookmark.parentId).then((data) => {
                        this.$set(this.bookmark, 'folderName', data[0].title)
                    })
                } else {
                    this.bookmark = {title: tab.title, url: tab.url}
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    /deep/ .layer {
        position: fixed;
        z-index: 100;
        top: 100%;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 1em;
        background: #fff;
        transition: all 0.5s;
        opacity: 0;

        &.show {
            top:0;
            opacity: 1;
        }
    }
</style>
