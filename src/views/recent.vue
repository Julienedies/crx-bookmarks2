<template>
    <div>
        <list :bookmarkArray="bookmarksArray"></list>
    </div>
</template>

<script>
    import {bookmarks} from '../libs/chrome/index'
    import list from '../components/list'

    console.log(bookmarks)

    export default {
        name: 'recent',
        components: {
            list,
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
                this.bookmarksArray = await bookmarks.getRecent(this.count)
                    .then(data => {
                        console.log(data)
                        return data
                    }).catch(err => {
                    console.error(err)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>