<template>
        <ul>
            <!--<tree-node v-for="node of tree" :node="node" :key="node.id"></tree-node>-->
            <li v-for="node of tree" :node="node" :key="node.id">
                <button class="arrow" v-if="node.children && node.children.length" v-toggle="'extend'"> ▼ </button>
                <router-link :to="`/node/${node.id}`" @click="select(node)">{{node.title || 'root'}}</router-link>
                <tree v-if="node.children" :tree="node.children"></tree>
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
        data(){
            return {
                v: {
                    toggle: [],
                    selected: []
                }
            }
        },
        props: {
            tree: Array
        },
        methods: {
            select() {
               console.log(arguments)
            },
            toggle(node, e) {
                console.log(arguments)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../basic/src/basic.scss";

        li {
            margin-left: 0.2em;
            transition: height 0.2s ease-in;
            .arrow {
                font-size: 0.8em;
                padding: $gap;
                color: $primaryColor3;
                transform: rotate(-90deg);
                transition: transform 0.2s ease-out;
                &.extend{
                    transform: rotate(0);
                }
                & + a + ul {
                    height: 0;
                    overflow: hidden;
                    transition: height 0.2s ease-in;
                }
                &.extend + a + ul{
                    height: auto;
                }
            }

            li {
                margin-left: 1.8em;
                border-left: 1px dotted $baseColor3;
            }

            >a {
                display: inline-block;
                padding:0 0 0 2.4em;
                line-height: 2.2em;
                background: url('../img/folder-icon.png') 0.6em 7px no-repeat transparent;
                background-size: 1.2em;
                &.router-link-exact-active.router-link-active{
                    font-weight: bold;
                    color: #0386d8;
                }
                &:hover{
                }
            }

        }
</style>