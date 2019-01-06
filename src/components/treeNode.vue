<template>
    <li name="node.id">
        <img src="../img/folder-icon.png" width="36">
        <router-link :to="`/node/${node.id}`">{{node.title}}</router-link>
        <tree v-if="node.children" :tree="node.children"></tree>
    </li>
</template>

<script>
    import Tree from './tree'

    console.log(Tree)

    export default {
        name: 'treeNode',
        components: {
            Tree
        },
        props: {
            node: Object
        }
    }
</script>

<style lang="scss" scoped>

</style>