<template>
    <li>
        <!-- 书签 -->
        <a v-if="bookmark.url" :href="bookmark.url" target="_blank">
            <img :src="bookmark.url | getFavicon" class="favicon">
            <span>
                <span class="tit">{{bookmark.title}}</span>
                <span class="url">{{bookmark.url}}</span>
            </span>
        </a>

        <!-- 文件夹 -->
        <router-link v-else :to="`/node/${bookmark.id}`">
            <img src="../img/folder-icon.png" class="favicon">
            <span>{{bookmark.title}}</span>
        </router-link>

        <!-- 上下文菜单 -->
        <div class="contextmenu">
            <!--<button @click=""><i class="fas fa-folder-open"></i> </button>-->
            <button @click="edit()"><i class="fas fa-edit"></i></button>
            <button @click="remove()"><i class="far fa-trash-alt"></i></button>
        </div>
    </li>
</template>

<script>

    export default {
        name: 'listItem',
        props: {
            bookmark: Object
        },
        methods: {
            edit() {
                //console.log(arguments)
                this.$emit('edit')
            },
            remove() {

            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../basic/src/basic.scss";

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

            &:hover{
                .url{
                    display: inline;
                }
            }

            .favicon {
                width: 16px!important;
                margin-right: $gap;
            }

            >span{
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .url{
                display:none;
                margin-left:2em;
                color: $baseColor3;
            }
        }
    }

</style>