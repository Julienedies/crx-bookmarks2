<template>
    <li>
        <div>
            <a :href="item.url" target="_blank" class="">
                <img :src="item.url | getFavicon">
                {{item.title}}
            </a>
        </div>
    </li>
</template>

<script>
    export default {
        name: 'listItem',
        props: {
            item: Object
        }
    }
</script>

<style lang="scss" scoped>

    .icon{
        width:1em;
    }
</style>