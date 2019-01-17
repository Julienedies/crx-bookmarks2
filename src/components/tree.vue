<template>
    <ul>
        <li v-for="node of tree" :node="node" :key="node.id">
            <div class="node-item" :class="{'extend': !node.extend}">
                <button class="arrow" v-if="node.children && node.children.length" @click="toggle(node)"> ▼</button>
                <button class="arrow" v-else></button>
                <router-link :to="`/node/${node.id}`" @click="select(node)">{{node.title || '根目录'}}</router-link>
                <div class="contextmenu">
                    <slot>
                        <button @click="edit(node)" title="修改"><i class="fas fa-edit"></i></button>
                        <button @click="createSubFolder(node)" title="新建子文件夹">
                            <i class="fas fa-folder-plus"></i>
                        </button>
                        <button @click="remove(node)"><i class="far fa-trash-alt"></i></button>
                    </slot>
                </div>
            </div>
            <tree v-if="node.children" :tree="node.children"></tree>
        </li>
    </ul>
</template>

<script>
    import {bookmarks} from '../libs/chrome/index'
    import editBookmark, { createSubFolder } from '../mixins/editBookmark'

    export default {
        name: 'tree',
        data () {
            return {}
        },
        props: {
            tree: Array
        },
        methods: {
            toggle (node) {
                this.$set(node, 'extend', !node.extend)
            },
            edit (node) {
                editBookmark(node)
            },
            createSubFolder (node) {
                createSubFolder(node)
            },
            remove(node){
                confirm('确认删除, 不可撤销!') && bookmarks.remove(node)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../basic/src/basic.scss";

    li {
        margin-left: 0.2em;
        transition: height 0.2s ease-in;

        .node-item {
            & + ul {
                height: 0;
                overflow: hidden;
                transition: height 0.2s ease-in;
            }

            &.extend {
                .arrow {
                    transform: rotate(0);
                }

                & + ul {
                    height: auto;
                }
            }

            .arrow {
                font-size: 0.8em;
                width: 1.2em;
                padding: $gap 0;
                text-align: center;
                color: $baseColor3;
                color: #6f6f6f;
                transform: rotate(-90deg);
                transition: transform 0.2s ease-out;

            }

            > a {
                display: inline-block;
                padding: 0 1em 0 2.4em;
                line-height: 2.2em;
                background: url('../img/folder-icon.png') 0.6em 7px no-repeat transparent;
                background-size: 1.2em;

                &.router-link-exact-active.router-link-active {
                    font-weight: bold;
                    color: #0386d8;
                }

                &:hover {
                }
            }

            .contextmenu {
                display: inline-block;
                opacity: 0;
                transform: translateX(1000px);
                transition: opacity 0.5s;
            }

            &:hover {
                .contextmenu {
                    opacity: 0.5;
                    transform: translateX(0);
                }
            }
        }

        li {
            margin-left: 1.8em;
            border-left: 1px dotted $baseColor3;
        }

    }
</style>