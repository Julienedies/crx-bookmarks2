<template>
    <div>
        <list :bookmarkArray="bookmarkArray"></list>
    </div>
</template>

<script>
    import { bookmarks } from '../libs/chrome/index'
    import getDb from '../libs/db'

    const db = getDb('shortcut')

    export default {
        name: 'shortcut',
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
                let idArray = await db.get().then(data => {
                    return Object.keys(data)
                })
                this.bookmarkArray = await bookmarks.get(idArray).then(bookmarkArray => {
                    for (let bookmark of bookmarkArray) {
                        bookmark.shortcut = idArray.includes(bookmark.id)
                    }
                    return bookmarkArray
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>