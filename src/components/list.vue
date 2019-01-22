<template>
    <div>
        <ul v-if="bookmarkArray && bookmarkArray.length" :class="listType || ui.list.showType">
            <list-item v-for="bookmark of bookmarkArray" :bookmark="bookmark" :key="bookmark.id" @contextmenu="onContextmenu">
                <slot :bookmark="bookmark"></slot>
            </list-item>
        </ul>
        <div v-else>
            没有数据.
        </div>
    </div>
</template>

<script>
    import listItem from './listItem'
    import {mapState} from 'vuex'

    export default {
        name: 'list',
        components: {
            listItem,
        },
        props: {
            bookmarkArray: Array,  // 要显示的书签数组
            showType: {
                type: String,
                default: 'list'   // class: list | gird
            }
        },
        data() {
            return {
                listType: ''
            }
        },
        computed:{
                ...mapState({
                    ui:'ui',
                })
        },
        mounted(){
            if(window.innerWidth < 900){
                this.listType = 'gird'
            }
        },
        methods: {
            onContextmenu(...args) {
                console.log('contextmenu', args)
                this.$emit('contextmenu', args[0], args[1])
            }
        },
        watch:{
            'bookmarkArray'(newVal, oldval){
                if(!oldval.length && this.$store.state.ui.list.reverse){
                    this.bookmarkArray.reverse()
                }
            },
            '$store.state.ui.list.reverse'(newVal){
                this.bookmarkArray.reverse()
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "../css/basic/src/basic.scss";

    ul.list {
        padding: $gap 0;
    }
    /deep/ ul.gird{
        display: flex;
        flex-flow: row wrap;
        //justify-content: space-between;
        align-content:space-around;
        >li{
            flex: 0 0 19%;
            margin:0 1%  1% 0;
            height: calc(15vw);
/*            min-height:15em;
            max-height: 20em;*/
            border: solid 1px $baseColor3;
            overflow: hidden;
            text-overflow: ellipsis;
            >a{
                .favicon{
                }
            }
            .url, .contextmenu{
                display: none;
            }
        }
    }
    /deep/ ul.list{
        li {
            @include flex-middle;
            min-height: 2.6em;
            padding: $gap/2;

            &:hover {
                background: rgba(180, 180, 180, 0.1);

                .contextmenu {
                    display: inherit;
                }
            }

            .contextmenu {
                display: none;
                white-space: nowrap;

                button {
                    cursor: pointer;
                    color: #9abad4;
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
</style>