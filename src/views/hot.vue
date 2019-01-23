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
    import { mapState } from 'vuex'

    const visitDb = getDb('visit')

    export default {
        name: 'hot',
        mixins: [mixins],
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
            ...mapState({
                reverse: state => state.ui.list.reverse
            }),
            count () {
                return this.bookmarkArray.length
            },
        },
        created () {
            this.getData()

            let callback = (...args) => {
                console.log('db event listener', args)
                this.getData()
            }

            visitDb.on('*', callback)

            this.$once('hook:beforeDestroy', function () {
                visitDb.off('*', callback)
            })
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
                    bookmarkArray.sort((a, b) => b.visit.count - a.visit.count)
                    this.reverse && bookmarkArray.reverse()
                    this.bookmarkArray = bookmarkArray
                }
            },
            remove (bookmark) {
                bookmarks.remove(bookmark)
            },
            edit (bookmark) {
                this.editBookmark(bookmark)  // 通过mixin混入的editBookmark方法
            }
        },
        watch: {
            '$root.event' (newVal) {
                console.log('$root.event watcher => ', newVal)
                this.getData()
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>