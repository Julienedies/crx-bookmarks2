<template>
    <div>
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">title</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input class="input" type="text" v-model="bookmark.title">
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">url</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input class="input" type="text" v-model="bookmark.url">
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label">
                <!-- Left empty for spacing -->
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <button class="button is-primary" @click="update" v-if="added">
                            更新
                        </button>
                        <button class="button is-primary" @click="add" v-else>
                            添加
                        </button>
                        <button class="button" @click="selectFolder" style="margin-left:4em;">选择文件夹</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import { bookmarks, tabs } from '../libs/chrome/index'

    export default {
        name: 'setBookmark',
        data () {
            return {
                bookmark: {},
                added: false
            }
        },
        mounted () {
            this.init()
        },
        methods: {
            async init () {
                let tab = await tabs.getSelected()
                console.log(tab)
                let bookmarkArray = await bookmarks.search(tab.url)
                if (bookmarkArray && bookmarkArray.length === 1) {
                    this.bookmark = bookmarkArray[0]
                    this.added = true
                } else {
                    this.bookmark = {title: tab.title, url: tab.url}
                }
            },
            add () {
                bookmarks.add(this.bookmark)
            },
            update () {
                bookmarks.update(this.bookmark)
            },
            selectFolder () {

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>