<template>
    <aside>
        <tree :tree="tree"></tree>
    </aside>
</template>

<script>
    import { bookmarks } from '../libs/chrome/index'
    import Tree from './tree'

    export default {
        name: 'asideBar',
        components: {
            Tree,
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
                const tree = await bookmarks.getTree()  // 数据结构见: /doc/tree.js

                function f (tree) {
                    let len = tree.length
                    while (len--) {
                        let node = tree[len]
                        if (node.children) {
                            f(node.children)
                        } else {
                            tree.splice(len, 1)  // 删除具体书签
                        }
                    }
                }

                f(tree);
                this.tree = tree

            }
        }

    }
</script>

<style lang="scss" scoped>
    @import "../basic/src/basic.scss";

    aside {
        padding: $gap2 $gap $gap 0;
        overflow-x: hidden;
        overflow-y: auto;
        white-space: nowrap;
    }

</style>