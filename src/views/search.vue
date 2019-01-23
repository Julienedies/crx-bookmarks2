<template>
    <div>
        <list-tool-bar></list-tool-bar>
        <list :bookmark-array="bookmarkArray"></list>
    </div>
</template>

<script>
    import listToolBar from '../components/listToolBar'
    import list from '../components/list'
    import mixins from '../mixins/index'
    import { bookmarks } from '../libs/chrome/index'

    export default {
        name: 'search',
        mixins: [mixins],
        components: {
            listToolBar,
            list
        },
        data () {
            return {
                bookmarkArray: []
            }
        },
        created () {
            this.getData()
        },
        methods: {
            async getData () {
                let query = this.$route.params.query
                this.bookmarkArray = await bookmarks.search(query)
            }
        },
        watch: {
            '$route' (to, from) {
                this.getData()
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>