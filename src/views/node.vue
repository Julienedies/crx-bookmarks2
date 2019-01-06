<template>
    <div>
        <list :bookmarkArray="bookmarkArray" :paths="paths"></list>
    </div>
</template>

<script>
    import list from '../components/list'
    import {bookmarks} from "../libs/chrome"

    export default {
        name: 'node',
        components: {
            list
        },
        data() {
            return {
                id: 1,
                paths: [],  // 书签文件夹面包屑
                bookmarkArray: []
            }
        },
        created() {
            console.log('created')
            this.getData()
        },
        watch: {
            '$route'(to, from) {
                console.log('watch $route', to, from)
                this.getData()
            }
        },
        methods: {
            async getData() {
                this.id = this.$route.params.id || this.id
                this.getBookmarks(this.id)
                this.paths = await this.getPaths(this.id).then(data => data)
            },
            async getBookmarks(id) {
                const bookmarkArray = await bookmarks.getChildren(id).then(data => data)
                console.log(bookmarkArray)
                this.bookmarkArray = bookmarkArray
            },
            async getPaths(id) {
                const paths = []
                do {
                    let bookmarkArray = await bookmarks.get(id).then(data => data)
                    let node = bookmarkArray[0]
                    paths.unshift(node)
                    id = node.parentId
                } while (id)
                console.log(paths)
                return paths
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>