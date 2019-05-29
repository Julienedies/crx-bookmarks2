<template>
    <ul>
        <li v-for="node of tree" :node="node" :key="node.id">
            <div class="node-item"
                 :class="{'extend': !node.extend, selected: node.contextmenu}"
                 @contextmenu="onContextmenu($event, node)"
                 @click="$router.push({path:`/node/${node.id}`})">

                <button class="arrow" v-if="node.children && node.children.length" @click.stop="toggle(node)"> ▼</button>
                <button class="arrow" v-else></button>

                <router-link :to="`/node/${node.id}`" v-if="!selectable">{{node.title || '根目录'}}</router-link>
                <a @click="select(node)" v-else>{{node.title || '根目录'}}</a>

                <contextmenu v-model="node.contextmenu">
                    <slot>
                        <div class="contextmenu">
                            <div>
                                <button @click="createSubFolder(node)" title="新建子文件夹">
                                    <i class="fas fa-folder-plus"></i>新建子文件夹
                                </button>
                            </div>
                            <div>
                                <button @click="edit(node)" title="编辑"><i class="fas fa-edit"></i>编辑</button>
                            </div>
                            <div>
                                <button @click="remove(node)"><i class="far fa-trash-alt"></i> 删除</button>
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
        props: {
            tree: Array,
            selectable: {           // 节点是否可以选择
                type: Boolean,
                default: false
            }
        },
        methods: {
            edit (node) {
                editBookmark(node)
            },
            createSubFolder (node) {
                createSubFolder(node)
            },
            remove (node) {
                confirm('确认删除, 不可撤销!') && bookmarks.remove(node)
            },
            toggle (node) {
                this.$set(node, 'extend', !node.extend);

            },
            onContextmenu (e, node) {
                e.preventDefault();
                this.$set(node, 'contextmenu', e)
            },
            select () {

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
                color: $activeColor2;
            }

            &:hover {
                background: $activeColor2;

                button, i {
                    color: #fff;
                }
            }
        }
    }

    li {
        margin-left: 0.2em;
        transition: height 0.2s ease-in;

        .node-item {
            &:hover {
                background: $activeColor2;
                color: #fff;

                .arrow, a.router-link-active {
                    color: #fff !important;
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
                    color: $activeColor1;
                }
            }

        }

        li {
            margin-left: 1.8em;
            border-left: 1px dotted $baseColor3;
        }

    }
</style>
