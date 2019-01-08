<template>
    <li>
        <!-- 书签 -->
        <a v-if="bookmark.url" :href="bookmark.url" target="_blank">
            <img :src="bookmark.url | getFavicon" class="favicon">
            <span>{{bookmark.title}}</span>
        </a>

        <!-- 文件夹 -->
        <router-link v-else :to="`/node/${bookmark.id}`">
            <img src="../img/folder-icon.png" class="favicon">
            <span>{{bookmark.title}}</span>
        </router-link>

        <!-- 上下文菜单 -->
        <div class="contextmenu">
            <button>修改</button>
            <button>删除</button>
            <button>新建文件夹</button>
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

    li {
        @include flex-middle;
        min-height: 2.2em;
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

            }
        }

        a {
            @extend .flex-middle;
            flex-grow: 1;
            padding-left: $gap;
            overflow: hidden;

            .favicon {
                width: 1.2em;
                margin-right: $gap;
            }

            span {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }

</style>