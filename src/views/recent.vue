<template>
    <div>
        <tool-bar :count="count"></tool-bar>

        <list :bookmarkArray="bookmarksArray">
            <template slot-scope="{ bookmark }">
                <button @click="edit(bookmark)" title="编辑"><i class="fas fa-edit"></i></button>
                <button @click="remove(bookmark)" title="删除"><i class="far fa-trash-alt"></i></button>
            </template>
        </list>

        <popup v-if="editing && goalBookmark" v-model="editing">
            <bookmark-editor :bookmark="goalBookmark" @close="close"></bookmark-editor>
        </popup>
    </div>
</template>

<script>
    import { bookmarks } from '../libs/chrome/index'
    import list from '../components/list'
    import toolBar from '../components/listToolBar'
    import bookmarkEditor from '../components/bookmarkEditor'

    export default {
        name: 'recent',
        components: {
            list,
            toolBar,
            bookmarkEditor
        },
        data () {
            return {
                count: 200,  // 最近书签数量限制
                bookmarksArray: [],    // 书签Array,
                goalBookmark: null,
                editing: false
            }
        },
        created () {
            this.getData()
        },
        mounted () {

        },
        methods: {
            async getData () {
                this.bookmarksArray = await bookmarks.getRecent(this.count)
                    .then(data => {
                        return data
                    }).catch(err => {
                        console.error(err)
                    })
            },
            edit (bookmark) {
                this.editing = true
                this.goalBookmark = this.$clone(bookmark)
            },
            remove (bookmark) {
                bookmarks.remove(bookmark)
            },
            close () {
                this.editing = false
                this.goalBookmark = null
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>