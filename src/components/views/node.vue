<template>
    <div>
        <list-tool-bar :paths="paths" :count="count" :sortOptions="sortOptions" @sortByChange="onSortByChange"></list-tool-bar>

        <list :bookmarkArray="bookmarkArray" @contextmenu="onContextmenu"></list>
    </div>
</template>

<script>
    import listToolBar from '../components/listToolBar'
    import list from '../components/list'
    import mixins from '../mixins/index'
    import { bookmarks } from '../libs/chrome'
    import { mapState } from 'vuex'

    export default {
        name: 'node',
        mixins: [mixins],
        components: {
            listToolBar,
            list
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
            ...mapState({
                reverse: state => state.ui.list.reverse
            }),
            count () {
                return this.bookmarkArray.length
            }
        },
        created () {
            this.getData()
        },
        methods: {
            async getData () {
                let id = this.$route.params.id
                this.bookmarkArray = await this.getBookmarksForNode(id)
                this.reverse && this.bookmarkArray.reverse()
                this.paths = await this.getPaths(id)
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
            onContextmenu (menu, bookmark) {
                console.log('onContextmenu =>', menu, bookmark)
                this[menu] && this[menu](bookmark)
            },
            createSubFolder (bookmark) {
                this.createSubFolder(bookmark)
            },
            edit (bookmark) {
                this.editBookmark(bookmark)
            },
            remove (bookmark) {
                bookmarks.remove(bookmark)
            }
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
        }
    }
</script>

<style lang="scss" scoped>

</style>