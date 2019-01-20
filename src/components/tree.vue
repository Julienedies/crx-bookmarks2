<template>
    <ul>
        <li v-for="node of tree" :node="node" :key="node.id">
            <div class="node-item" :class="{'extend': !node.extend, selected: node.contextmenu}" @contextmenu="onContextmenu($event, node)">
                <button class="arrow" v-if="node.children && node.children.length" @click="toggle(node)"> ▼</button>
                <button class="arrow" v-else></button>
                <router-link :to="`/node/${node.id}`" @click="select(node)">{{node.title || '根目录'}}</router-link>
                <contextmenu v-model="node.contextmenu">
                    <slot>
                        <div class="contextmenu">
                            <div>
                                <button @click="edit(node)" title="修改"><i class="fas fa-edit"></i>修改</button>
                            </div>
                            <div>
                                <button @click="createSubFolder(node)" title="新建子文件夹">
                                    <i class="fas fa-folder-plus"></i>新建子文件夹
                                </button>
                            </div>
                            <div>
                                <button @click="remove(node)"><i class="far fa-trash-alt"></i>删除</button>
                            </div>
                        </div>
                    </slot>
                </contextmenu>
            </div>
            <tree v-if="node.children" :tree="node.children"></tree>
        </li>
    </ul>
</template>

<script>
    import { bookmarks } from '../libs/chrome/index'
    import editBookmark, { createSubFolder } from '../mixins/editBookmark'

    export default {
        name: 'tree',
        data () {
            return {
                contextmenuId: null
            }
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
            remove (node) {
                confirm('确认删除, 不可撤销!') && bookmarks.remove(node)
            },
            onContextmenu (e, node) {
                e.preventDefault();
                console.log(4444, this, e)
                this.$set(node, 'contextmenu', e)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../css/basic/src/basic.scss";

    .contextmenu {
        > * {
            @include flex-middle;
            margin: 0.25rem 0;
            padding: 0 0.5rem;

            > * {
                flex: 1;
                text-align: left !important;
            }

            i {
                margin-right: 1rem;
            }

            &:hover {
                background: $baseColor;
            }
        }
    }

    li {
        margin-left: 0.2em;
        transition: height 0.2s ease-in;

        .node-item {
            &.selected {
                > a {
                    font-weight: bold;
                    color: #0386d8;
                }
            }

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

            &:hover {
            }
        }

        li {
            margin-left: 1.8em;
            border-left: 1px dotted $baseColor3;
        }

    }
</style>