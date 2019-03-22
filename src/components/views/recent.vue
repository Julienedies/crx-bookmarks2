<template>
    <div>
        <tool-bar :count="count"></tool-bar>
        <list :bookmarkArray="bookmarkArray"></list>
    </div>
</template>

<script>
    import list from '../list'
    import toolBar from '../listToolBar'
    import { bookmarks } from '../../libs/chrome'
    import { mapState } from 'vuex'

    export default {
        name: 'recent',
        components: {
            list,
            toolBar
        },
        data () {
            return {
                count: 200,          // 最近书签数量限制
                bookmarkArray: []   // 书签Array,
            }
        },
        created () {
            this.getData()
        },
        computed: {
            ...mapState({
                reverse: state => state.ui.list.reverse
            })
        },
        methods: {
            async getData () {
                this.bookmarkArray = await bookmarks.getRecent(this.count)
                if (this.reverse) this.bookmarkArray.reverse()
            }
        },
        watch: {
            '$root.event' () {
                this.getData()
            },
            'reverse' (newVal) {
                this.bookmarkArray.reverse()
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>