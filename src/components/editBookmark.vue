<template>
    <div class="edit-box">
        <h3>修改书签</h3>
        <section>
            <div class="field">
                <label class="label">title</label>
                <div class="control">
                    <input class="input" type="text" v-model="bookmark.title">
                </div>
            </div>

            <div class="field" v-if="bookmark.url">
                <label class="label">url</label>
                <div class="control">
                    <input class="input" type="text" v-model="bookmark.url">
                </div>
            </div>

            <div class="field is-grouped is-grouped-centered">
                <p class="control">
                    <button class="button is-light" @click="cancel"> 取消 </button>
                </p>
                <p class="control">
                    <button class="button is-primary" @click="save"> 保存 </button>
                </p>
            </div>
        </section>
    </div>
</template>

<script>
    import { bookmarks, Bookmark } from '../libs/chrome/index'

    export default {
        name: 'editBookmark',
        props: {
            bookmark: Object
        },
         methods: {
            close() {
                console.log('emit close', arguments)
                this.$emit('close')
            },
            save() {
                new Bookmark(this.bookmark).update().then(data => {
                    console.log('update', data)
                    this.close()
                })
            },
            cancel() {
                this.close()
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../basic/src/basic.scss";

        .edit-box{
            padding: $gap2;
        }
</style>