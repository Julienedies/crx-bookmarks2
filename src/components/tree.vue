<template>
        <ul>
            <!--<tree-node v-for="node of tree" :node="node" :key="node.id"></tree-node>-->
            <li v-for="node of tree" :node="node" :key="node.id">
                <router-link :to="`/node/${node.id}`">{{node.title}}</router-link>
                <tree v-if="node.children" :tree="node.children"></tree>
            </li>
        </ul>
</template>

<script>
    import treeNode from './treeNode'

    export default {
        name: 'tree',
        components: {
            treeNode
        },
        props: {
            tree: Array
        }
    }
</script>

<style lang="scss" scoped>
        li{
            padding:0px 0px 0px 1.8em;
            line-height: 1.8em;
            background: url('../img/folder-icon.png') 0 3px no-repeat transparent;
            background-size: 1.4em;
        }
</style>