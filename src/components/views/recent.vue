<template>
    <div>
        <tool-bar :count="count"></tool-bar>
        <list :bookmarkArray="bookmarkArray"></list>
    </div>
</template>

<script>
    import list from '../list'
    import toolBar from '../listToolBar'
    import { mapState } from 'vuex'
    import bookmarkManager  from '../../libs/bookmarkManager'
    import setting from '../../libs/setting'

    export default {
        name: 'recent',
        components: {
            list,
            toolBar
        },
        data () {
            return {
                count: 300,          // 最近书签数量限制
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
                this.count = await setting.get('recentCount') || this.count;
                this.bookmarkArray = await bookmarkManager.getRecent(this.count)
                if (this.reverse) this.bookmarkArray.reverse();
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
