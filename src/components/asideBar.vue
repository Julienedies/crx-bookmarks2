<template>
    <aside>
        <tree :tree="tree"></tree>
    </aside>
</template>

<script>
    import { bookmarks } from '../libs/chrome/index'
    import tree from './tree'

    export default {
        name: 'asideBar',
        components: {
            tree,
        },
        data () {
            return {
                tree: []
            }
        },
        created () {
            this.getData()
        },
        watch: {
           '$root.event'(newVal){
               this.getData()
           }
        },
        methods: {
            async getData () {
                this.tree = await bookmarks.getTree(true)  // 数据结构见: /doc/tree.js
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../basic/src/basic.scss";

    aside {
        padding: $gap2 $gap $gap 0;
        overflow-x: hidden;
        overflow-y: scroll;
        white-space: nowrap;
        width:20%;
    }
</style>