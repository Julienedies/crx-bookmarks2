<template>
    <div>
        <list :bookmark-array="bookmarkArray"></list>
    </div>
</template>

<script>
    import * as chromeApi from '../libs/chrome/index'
    import list from '../components/list'

    export default {
        name: 'search',
        components: {
            list
        },
        data() {
            return {
                bookmarkArray: []
            }
        },
        watch: {
            '$route'(to, from) {
                this.getData()
            }
        },
        created() {
            this.getData()
        },
        methods: {
            async getData() {
                let query = this.$route.params.query
                this.bookmarkArray = await chromeApi.bookmarks.search(query)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>