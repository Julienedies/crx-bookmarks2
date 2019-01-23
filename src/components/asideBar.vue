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
        methods: {
            async getData () {
                let isOnlyFolder = true // 只保留文件夹
                this.tree = await bookmarks.getTree(isOnlyFolder)  // 数据结构见: /doc/tree.js
            }
        },
        watch: {
            '$root.event'(event){
                let {name, args} = event
                let [id, bookmark] = args
                let tree = this.tree
                let x = []
                if(name === 'onRemoved'){
                    function f (tree) {
                        let len = tree.length
                        while (len--) {
                            let node = tree[len]
                            if (node.id === id) {
                                tree.splice(len, 1)
                            } else if(node.children) {
                                f(node.children)
                            }
                        }
                    }
                    return f(this.tree)
                }
                this.getData()
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../css/basic/src/basic.scss";

    aside {
        padding: $gap2 $gap $gap 0;
        overflow-x: hidden;
        overflow-y: scroll;
        white-space: nowrap;
        width:20%;
    }
</style>