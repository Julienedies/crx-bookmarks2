<template>
    <div class="bookmarkEditor">
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
                    <button class="button is-light" @click="cancel"> 取消</button>
                </p>
                <p class="control">
                    <button class="button is-primary" @click="save" v-if="bookmark.id"> 保存</button>
                    <button class="button is-primary" @click="create" v-else> 新建</button>
                </p>
                <p class="help">
                    {{ msg }}
                </p>
            </div>
        </section>
    </div>
</template>

<script>
    import { bookmarks } from '../libs/chrome/index'

    export default {
        name: 'bookmarkEditor',
        props: {
            bookmark: Object,
        },
        data () {
            return {
                msg: ''
            }
        },
        methods: {
            save () {
                bookmarks.update(this.bookmark).then(data => {
                    console.log('update', data)
                    this.close()
                })
            },
            create () {
                bookmarks.add(this.bookmark).then(data => {
                    this.close()
                })
            },
            cancel () {
                this.close()
            },
            close () {
                console.log('emit close', arguments)
                this.$emit('close')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../css/basic/src/basic.scss";

    .bookmarkEditor {
        padding: $gap2;
    }
</style>