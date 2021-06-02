<template>
    <div>
        <ul :class="listType || showType || ui.list.showType">
            <list-item v-for="bookmark of bookmarkArray" :bookmark="bookmark" :key="bookmark.id" @contextmenu="onContextmenu">
                <slot :bookmark="bookmark"></slot>
            </list-item>
        </ul>
    </div>
</template>

<script>
    import listItem from './listItem'
    import { mapState, mapMutations } from 'vuex'

    export default {
        name: 'list',
        components: {
            listItem,
        },
        props: {
            bookmarkArray: Array,  // 要显示的书签数组
            showType: {
                type: String,
                default: ''   // class: list | gird
            }
        },
        data () {
            return {
                listType: ''
            }
        },
        computed: {
            ...mapState({
                ui: 'ui',
            })
        },
        mounted () {
            if (window.innerWidth < 900) {
                this.listType = 'grid'
                this.updateUi(['list.showType', 'grid'])
            }
        },
        methods: {
            ...mapMutations({
                updateUi: 'updateUi'
            }),
            onContextmenu (...args) {
                console.log('contextmenu', args)
                this.$emit('contextmenu', args)
            }
        },
        watch: {
            'ui.list.showType' (newVal, oldVal) {
                this.listType = newVal
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../css/basic/src/basic.scss";

    /deep/ ul.list {
        padding: $gap 0;

        li {
            @include flex-middle;
            height: auto!important;
            min-height: 2.6em;
            margin:0 0 1px 0;
            padding: $gap/2;

            &:hover {
                background: rgba(180, 180, 180, 0.1);

                .contextmenu2 {
                    display: inherit;
                }
            }

            .contextmenu2 {
                display: none;
                white-space: nowrap;

                button {
                    cursor: pointer;
                    color: $activeColor2;
                    padding: 0 $gap2;
                    border: none;
                    font: inherit;
                    background: none;
                }
            }

            a {
                @extend .flex-middle;
                flex-grow: 1;
                padding-left: $gap;
                white-space: nowrap;
                overflow: hidden;

                &:hover {
                    .url {
                        display: inline;
                    }
                }

                .favicon {
                    width: 16px !important;
                    margin-right: $gap;
                }

                > span {
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .url {
                    display: none;
                    margin-left: 2em;
                    color: $baseColor3;
                }
            }
        }
    }

    /deep/ ul.grid {
        padding: $gap2 0;
        display: flex;
        flex-flow: row wrap;
        align-content: space-around;

        > li {
            flex: 0 0 19%;
            margin: 0 1% 1% 0;
            padding: 0.5rem;
            height: calc(15vw);
            /*            min-height:15em;
                        max-height: 20em;*/
            border: solid 1px $baseColor3;
            overflow: hidden;
            text-overflow: ellipsis;

            > a {
                display: block;
                min-height: 100%;

                .favicon {
                }
            }

            .url, .contextmenu2 {
                display: none;
            }

        }
    }
</style>
