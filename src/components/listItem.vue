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
            <span class="">{{bookmark.title}}</span>
        </router-link>

        <!-- 上下文菜单 -->
        <div class="contextmenu">
            <slot>
                <button @click="createSubFolder(bookmark)" v-if="!bookmark.url" title="新建子文件夹">
                    <i class="fas fa-folder-plus"></i>
                </button>
                <button @click="editBookmark(bookmark)" title="编辑"><i class="fas fa-edit"></i></button>
                <button @click="remove(bookmark)" title="删除"><i class="far fa-trash-alt"></i></button>
            </slot>
        </div>
    </li>
</template>

<script>
    import {bookmarks} from '../libs/chrome/index'
    import mixins from '../mixins/index'
    import editBookmark, { createSubFolder } from '../mixins/editBookmark'
    export default {
        name: 'listItem',
        mixins: [mixins],
        props: {
            bookmark: Object
        },
        methods: {
            createSubFolder(bookmark){
                createSubFolder(bookmark)
            },
            editBookmark(bookmark){
                editBookmark(bookmark)
            },
            remove (bookmark) {
                bookmarks.remove(bookmark)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>