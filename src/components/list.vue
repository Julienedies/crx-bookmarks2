<template>
    <div>
        <div class="tool-bar">
            <div>
                <div v-if="paths" class="paths">
                    <router-link v-for="path of paths" v-if="path.title" :to="`/node/${path.id}`" :key="path.id"> &nbsp;  {{ path.title }}  &nbsp; > </router-link>
                </div>
                <div class="select is-small">
                    <select v-model="sortBy">
                        <option v-for="option of options" :value="option.value">{{option.text}}</option>
                    </select>
                </div>
            </div>
            <div class="counter"> 共 {{ count }} 项</div>
        </div>

        <ul>
            <list-item v-for="bookmark of bookmarkArray" :bookmark="bookmark" :key="bookmark.id" @edit="onEdit(bookmark)"></list-item>
        </ul>
        <popup v-model="editing" >
            <edit-bookmark :bookmark="bookmark" @close="editing=false"></edit-bookmark>
        </popup>
    </div>
</template>

<script>
    import listItem from './listItem'
    import editBookmark from '../components/editBookmark'

    export default {
        name: 'list',
        components: {
            listItem,
            editBookmark
        },
        props: {
            bookmarkArray: Array,
            paths: Array
        },
        data() {
            return {
                options: [
                    {text: '选择排序方式', value: ''},
                    {text: '使用频率, 默认', value: 'hot'},
                    {text: 'title', value: 'title'},
                    {text: 'url', value: 'url'},
                    {text: '文件夹优先', value: 'children'},
                    {text: '添加时间', value: 'dateAdded'},
                    {text: '实际顺序, 可拖动排序', value: 'index'}
                ],
                sortBy: '',   // 排序方式
                bookmark: {},   // 要操作的目标书签
                editing: false  // 书签编辑模式
            }
        },
        computed: {
            count() {
                return this.bookmarkArray.length
            }
        },
        methods: {
            onEdit(bookmark) {
                console.log('onEdit', arguments)
                this.editing = true
                this.bookmark = JSON.parse(JSON.stringify(bookmark))
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../basic/src/basic.scss";

    .tool-bar {
        @include flex-middle;
        justify-content: space-between;
        padding: $gap 0 $gap $gap2;
        background: $baseColor2;
        >div:first-child{
            @include flex-middle;
        }
        .paths{
            margin: 0 10*$gap 0 0;
        }
        .counter{
            margin:0 5*$gap 0 0;
        }
    }

    ul {
        padding: $gap 0;
    }
</style>