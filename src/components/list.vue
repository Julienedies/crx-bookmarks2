<template>
    <div>
        <ul>
            <list-item v-for="v of list" :item="v" :key="v.id"></list-item>
        </ul>
    </div>
</template>

<script>
    import listItem from './listItem'

    export default {
        name: 'list',
        components: {
            listItem
        },
        props: {
            list: Array
        }
    }
</script>

<style lang="scss" scoped>
ul {
    li {
        min-height: 1em;
        padding: 5px;
        white-space: nowrap;
        &:hover{
            background: rgba(0,0,0,0.1);
        }
    }
}
</style>