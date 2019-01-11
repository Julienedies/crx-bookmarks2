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
            this.getData()
        },
        watch: {
            '$route'(to, from) {
                console.log('watch $route', to, from)
                this.getData()
            },
            '$root.event'(newValue){
                console.info('========', newValue)
                this.getData()
            }
        },
        methods: {
            async getData() {
                this.id = this.$route.params.id || this.id
                this.bookmarkArray = await this.getBookmarksForNode(this.id)
                this.paths = await this.getPaths(this.id)
            },
            async getBookmarksForNode(id) {
                return await bookmarks.getChildren(id).then(data => data)
            },
            async getPaths(id) {
                const paths = []
                do {
                    let bookmarkArray = await bookmarks.get(id).then(data => data)
                    let node = bookmarkArray[0]
                    paths.unshift(node)
                    id = node.parentId
                } while (id)
                return paths
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>