<template>
    <div>
        <tool-bar :paths="paths" :options="options" :count="count"></tool-bar>
        <ul>
            <list-item v-for="bookmark of bookmarkArray" :bookmark="bookmark" :key="bookmark.id"></list-item>
        </ul>
    </div>
</template>

<script>
    import toolBar from '../components/toolBar'
    import listItem from './listItem'

    export default {
        name: 'list',
        components: {
            listItem,
            toolBar
        },
        props: {
            bookmarkArray: Array,
            paths: Array
        },
        data() {
            return {
                options: [
                    {text: 'title', value: 'title'},
                    {text: 'url', value: 'url'},
                    {text: '文件夹优先', value: 'children'},
                    {text: '添加时间', value: 'dateAdded'},
                    {text: '实际顺序, 可拖动排序', value: ''}
                ]
            }
        },
        computed: {
            count () {
                return this.bookmarkArray.length
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>