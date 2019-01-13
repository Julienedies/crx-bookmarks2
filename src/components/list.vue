<template>
    <div>
        <ul v-if="bookmarkArray && bookmarkArray.length">
            <list-item v-for="bookmark of bookmarkArray" :bookmark="bookmark" :key="bookmark.id" @contextmenu="onContextmenu">
                <slot :bookmark="bookmark"></slot>
            </list-item>
        </ul>
        <div v-else>
            没有相关数据.
            <button><i class="fas fa-redo"></i> </button>
        </div>
    </div>
</template>

<script>
    import listItem from './listItem'

    export default {
        name: 'list',
        components: {
            listItem,
        },
        props: {
            bookmarkArray: Array,  // 要显示的书签数组
            showType: String  // 列表类型还是gird类型显示, 对应一个class
        },
        data() {
            return {
            }
        },
        methods: {
            onContextmenu(...args) {
                console.log('contextmenu', args)
                this.$emit('contextmenu', args[0], args[1])
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../basic/src/basic.scss";

    ul {
        padding: $gap 0;
    }
</style>