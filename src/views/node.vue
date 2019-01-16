<template>
    <div>
        <list-tool-bar :paths="paths" :count="count" :sortOptions="sortOptions" @sortByChange="onSortByChange"
                       @sortReverseChange="onSortReverseChange"></list-tool-bar>

        <list :bookmarkArray="bookmarkArray" @contextmenu="onContextmenu"></list>

        <popup v-if="editing && goalBookmark" v-model="editing">
            <bookmark-editor :bookmark="goalBookmark" @close="close"></bookmark-editor>
        </popup>
    </div>
</template>

<script>
    import { bookmarks } from '../libs/chrome'
    import list from '../components/list'
    import listToolBar from '../components/listToolBar'
    import bookmarkEditor from '../components/bookmarkEditor'

    export default {
        name: 'node',
        components: {
            list,
            listToolBar,
            bookmarkEditor
        },
        data () {
            return {
                sortOptions: [
                    {text: '选择排序方式', value: 'index'},
                    {text: '使用频率, 默认', value: 'hot'},
                    {text: 'title', value: 'title'},
                    {text: 'url', value: 'url'},
                    {text: '文件夹优先', value: 'children'},
                    {text: '添加时间', value: 'dateAdded'},
                    {text: '实际顺序, 可拖动排序', value: 'index'}
                ],
                sortBy: '',   // 排序方式
                paths: [],  // 书签文件夹面包屑
                bookmarkArray: [],
                editing: false,
                goalBookmark: null
            }
        },
        computed: {
            count () {
                return this.bookmarkArray.length
            }
        },
        created () {
            this.getData()
        },
        watch: {
            '$route' (to, from) {
                console.log('watch $route', to, from)
                this.getData()
            },
            '$root.event' (newValue) {
                this.getData()
            },
            'sortBy' (newVal) {
                console.log('sortBy => ', newVal)
                this.$sortBookmarksBy(this.bookmarkArray, newVal)
            }
        },
        methods: {
            async getData () {
                this.id = this.$route.params.id || this.id
                this.bookmarkArray = await this.getBookmarksForNode(this.id)
                this.paths = await this.getPaths(this.id)
            },
            async getBookmarksForNode (id) {
                return await bookmarks.getChildren(id).then(data => data)
            },
            async getPaths (id) {
                const paths = []
                do {
                    let bookmarkArray = await bookmarks.get(id).then(data => data)
                    let node = bookmarkArray[0]
                    paths.unshift(node)
                    id = node.parentId
                } while (id)
                return paths
            },
            onSortByChange (val) {
                this.sortBy = val
            },
            onSortReverseChange (v) {
                console.log('onSortReverseChange => ', v)
                this.bookmarkArray.reverse()
            },
            onContextmenu (menu, bookmark) {
                console.log('onContextmenu =>', menu, bookmark)
                this[menu] && this[menu](bookmark)
            },
            createSubFolder (bookmark) {
                this.editing = true
                this.goalBookmark = {title: '新建文件夹', parentId: bookmark.id}
            },
            edit (bookmark) {
                this.editing = true
                this.goalBookmark = this.$clone(bookmark)
            },
            remove (bookmark) {
                bookmarks.remove(bookmark)
            },
            close () {
                this.editing = false
                this.goalBookmark = null
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>