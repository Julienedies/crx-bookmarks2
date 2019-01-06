<template>
    <li>
        <div>
            <a v-if="bookmark.url" :href="bookmark.url" target="_blank">
                <img :src="bookmark.url | getFavicon" class="favicon">
                {{bookmark.title}}
            </a>

            <router-link v-else :to="`/node/${bookmark.id}`">
                <img src="../img/folder-icon.png" class="favicon">
                {{bookmark.title}}
            </router-link>
        </div>
    </li>
</template>

<script>
    export default {
        name: 'listItem',
        props: {
            bookmark: Object
        }
    }
</script>

<style lang="scss" scoped>
    @import "../basic/src/basic.scss";

    $gap: 7px;

    li {
        min-height: 1em;
        padding: $gap;
        white-space: nowrap;
        &:hover{
            background: rgba(180,180,180,0.1);
        }
        a {
            @extend .flex-middle;
            overflow: hidden;
            text-overflow: ellipsis;
            .favicon{
                width:1em;
                margin-right: $gap;
            }
        }
    }

</style>