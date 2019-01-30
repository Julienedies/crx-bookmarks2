<template>
    <li>
        <!-- 书签 -->
        <a v-if="bookmark.url" :Xhref="bookmark.url" target="_blank" @click="open(bookmark.url)">
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
                <button @click="removeShortcut(bookmark)" title="移除快捷方式" v-if="bookmark.shortcut"><i class="fas fa-unlink"></i></button>
                <button @click="addShortcut(bookmark)" title="加入快捷方式" v-else><i class="fas fa-link"></i></button>
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
    import { bookmarks, tabs } from '../libs/chrome/index'
    import editBookmark, { createSubFolder } from '../mixins/editBookmark'
    import getDb from '../libs/db'

    const shortcutDb = getDb('shortcut')

    export default {
        name: 'listItem',
        props: {
            bookmark: Object
        },
        methods: {
            createSubFolder (bookmark) {
                createSubFolder(bookmark)
            },
            editBookmark (bookmark) {
                editBookmark(bookmark)
            },
            remove (bookmark) {
                bookmarks.remove(bookmark)
                this.$emit('contextmenu', 'remove', bookmark)
            },
            addShortcut (bookmark) {
                shortcutDb.set(bookmark)
                //this.bookmark.shortcut = true
                this.$set(this.bookmark, 'shortcut', true)
            },
            removeShortcut (bookmark) {
                shortcutDb.remove(bookmark)
                //this.bookmark.shortcut = false
                this.$set(this.bookmark, 'shortcut', false)
            },
            open(url){
                tabs.create({ url, selected: true })
                return false
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>