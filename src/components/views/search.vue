<template>
    <div>
        <list-tool-bar></list-tool-bar>
        <list :bookmark-array="bookmarkArray"></list>
    </div>
</template>

<script>
    import listToolBar from '../listToolBar'
    import list from '../list'
    import { bookmarks } from '../../libs/chrome'

    export default {
        name: 'search',
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
            },
            '$root.event' (newValue) {
                this.getData()
            },
            '$store.state.ui.list.reverse'(){
                this.bookmarkArray.reverse()
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
