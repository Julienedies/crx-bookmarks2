<template>
    <div>
        <tool-bar :count="count"></tool-bar>

        <list :bookmark-array="bookmarkArray">
<!--            <template slot-scope="{bookmark}">
                <button @click="removeShortcut(bookmark)" title="移除快捷方式" v-if="bookmark.shortcut"><i class="fas fa-unlink"></i></button>
                <button @click="addShortcut(bookmark)" title="加入快捷方式" v-else><i class="fas fa-link"></i></button>
                <button @click="edit(bookmark)"><i class="fas fa-edit"></i></button>
                <button @click="remove(bookmark)"><i class="far fa-trash-alt"></i></button>
                <button>{{ bookmark.visit.count }}</button>
            </template>-->
        </list>

    </div>
</template>

<script>
    import list from '../list'
    import toolBar from '../listToolBar'
    import mixins from '../../mixins'
    import { mapState } from 'vuex'
    import getDb from '../../libs/db'
    import bookmarkManager from '../../libs/bookmarkManager'
    const jbmDb = getDb('jbm')

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
                console.log('jbmDb event listener', args)
                this.getData()
            }
            //jbmDb.on('*', callback)
            this.$once('hook:beforeDestroy', function () {
                //jbmDb.off('*', callback)
            })
        },
        methods: {
            async getData () {
                let bookmarkArray = await bookmarkManager.getHot();
                this.reverse && bookmarkArray.reverse();
                this.bookmarkArray = bookmarkArray;
            },
            remove (bookmark) {
                bookmarkManager.remove(bookmark)
            },
            edit (bookmark) {
                this.editBookmark(bookmark)  // 通过mixin混入的editBookmark方法
            },
            addShortcut (bookmark) {
                //shortcutDb.set(bookmark)
                //this.$set(bookmark, 'shortcut', true)
            },
            removeShortcut (bookmark) {
                //shortcutDb.remove(bookmark)
                //this.$set(bookmark, 'shortcut', false)
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
