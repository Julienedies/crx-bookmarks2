<template>
    <div>
        <tool-bar :paths="paths" :sortOptions="sortOptions" :count="count"></tool-bar>

        <list :bookmarkArray="bookmarkArray" @contextmenu="onContextmenu"></list>

        <popup v-if="editing && goalBookmark" v-model="editing">
            <bookmark-editor :bookmark="goalBookmark" @close="close"></bookmark-editor>
        </popup>
    </div>
</template>

<script>
    import { bookmarks } from '../libs/chrome'
    import list from '../components/list'
    import toolBar from '../components/tool-bar'
    import bookmarkEditor from '../components/bookmarkEditor'

    export default {
        name: 'node',
        components: {
            list,
            toolBar,
            bookmarkEditor
        },
        data () {
            return {
                id: 1,
                sortOptions: [
                    {text: '选择排序方式', value: ''},
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
            onContextmenu(menu, bookmark){
                    this[menu] && this[menu](bookmark)
            },
            edit(bookmark){
                this.goalBookmark = this.$clone(bookmark)
                this.editing = true
            },
            remove(bookmark){
                bookmark.remove(bookmark)
                console.log('remove ', bookmark)
            },
            close(){
                this.goalBookmark = null
                this.editing = false
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>