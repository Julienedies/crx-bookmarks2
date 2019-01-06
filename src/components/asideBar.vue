<template>
    <div style="white-space: pre;">
        <tree :tree="tree"></tree>
    </div>
</template>

<script>
    import * as chromeApi from '../libs/chrome/index'
    import Tree from './tree'

    export default {
        name: 'asideBar',
        components: {
            Tree,
        },
        data() {
            return {
                tree: []
            }
        },
        created() {
            this.getData()
        },
        methods: {
            async getData() {
                const tree = await chromeApi.bookmarks.getTree()  // 数据结构见: /doc/tree.js

                function f(tree) {
                    let len = tree.length
                    while (len--) {
                        let node = tree[len]
                        if (node.children) {
                            f(node.children)
                        } else {
                            tree.splice(len, 1)
                        }
                    }
                }

                f(tree);
                this.tree = tree

            }
        }

    }
</script>

<style scoped>

</style>