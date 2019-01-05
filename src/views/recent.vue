<template>
    <div>
        <list v-bind:list="bookmarksArray"></list>
    </div>
</template>

<script>
    import {bookmarks} from '../libs/chrome/index'
    import list from '../components/list'

    console.log(bookmarks)

    export default {
        name: 'recent',
        components: {
            list
        },
        data() {
            return {
                count: 100,  // 最近书签数量限制
                bookmarksArray: [],    // 书签Array
            }
        },
        created() {
            this.getData()
        },
        methods: {
            async getData() {
                let that = this
                 const data = await bookmarks.getRecent(this.count)
                    .then(data => {
                        console.log(data)
                        return data
                        //that.bookmarks = data
                    }).catch(err => {
                    console.error(err)
                })
                this.bookmarksArray = data
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>