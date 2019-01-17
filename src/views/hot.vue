<template>
    <div>
        <tool-bar :count="count"></tool-bar>
        <list :bookmark-array="bookmarkArray">
            <template slot-scope="{bookmark}">
                <button @click="edit(bookmark)"><i class="fas fa-edit"></i></button>
                <button @click="remove(bookmark)"><i class="far fa-trash-alt"></i></button>
                <button>{{ bookmark.visit.count }}</button>
            </template>
        </list>
    </div>
</template>

<script>
    import { bookmarks } from '../libs/chrome/index'
    import getDb from '../libs/db'
    import list from '../components/list'
    import toolBar from '../components/listToolBar'
    import mixins from '../mixins/index'

    const visitDb = getDb('visit')

    export default {
        name: 'hot',
        mixins:[mixins],
        components: {
            toolBar,
            list
        },
        data () {
            return {
                bookmarkArray: []
            }
        },
        computed: {
            count () {
                return this.bookmarkArray.length
            },
        },
        mounted () {
            this.getData()
            visitDb.on('change', (args) => {
                let StorageEvent = args[0]
                this.getData()
            })
        },
        beforeDestroy () {
        },
        watch: {
            '$root.event' (newVal) {
                console.log('$root.event watcher => ', newVal)
                this.getData()
            }
        },
        methods: {
            async getData () {
                let visitObj = await visitDb.get()
                let idArray = Object.keys(visitObj)
                if (idArray.length) {
                    let bookmarkArray = await bookmarks.get(idArray)
                    bookmarkArray.forEach(bookmark => {
                        bookmark.visit = visitObj[bookmark.id]
                    })
                    bookmarkArray.sort((a,b) => b.visit.count - a.visit.count)
                    this.bookmarkArray = bookmarkArray
                }
            },
            remove (bookmark) {
                bookmarks.remove(bookmark)
            },
            edit (bookmark) {
                this.editBookmark(bookmark)  // 通过mixin混入editBookmark方法
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>