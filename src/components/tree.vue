<template>
        <ul>
            <!--<tree-node v-for="node of tree" :node="node" :key="node.id"></tree-node>-->
            <li v-for="node of tree" :node="node" :key="node.id">
                <router-link :to="`/node/${node.id}`">{{node.title}}</router-link>
                <tree v-if="node.children && node.children.length" :tree="node.children"></tree>
            </li>
        </ul>
</template>

<script>
    import treeNode from './treeNode'

    export default {
        name: 'tree',
        components: {
            treeNode
        },
        props: {
            tree: Array
        }
    }
</script>

<style lang="scss" scoped>
    @import "../basic/src/basic.scss";

        li {
            margin-left: 0.2em;
            li {
                margin-left: 1.8em;
            }

            >a {
                display: block;
                padding:0px 0px 0px 2.4em;
                line-height: 2.2em;
                background: url('../img/folder-icon.png') 0.6em 7px no-repeat transparent;
                background-size: 1.2em;
                &:hover{
                    transition: all 0.2s ease-in;
                    color:#fff;
                    background-color: $activeColor;
                }
            }

        }
</style>