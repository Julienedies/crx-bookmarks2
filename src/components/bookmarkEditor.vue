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

            <div class="field">
                <label class="label">tag</label>
                <div class="control">
                    <input class="input" type="text" v-model="bookmark.tag">
                </div>
            </div>

            <div class="field">
                <label class="label">level</label>
                <div class="control">
                    <label class="radio" v-for="v in levels" :style="{color:v.color}">
                        <input type="radio" name="level" :value="v.value" :checked="v.value===bookmark.level" v-model="bookmark.level">
                        {{ v.value }}级
                    </label>
                </div>
            </div>

            <div class="field is-grouped is-grouped-centered">
                <p class="control">
                    <button class="button is-light" @click="cancel"> 取消</button>
                </p>
                <p class="control">
                    <button class="button is-primary" @click="save" v-if="bookmark.id"> 保存</button>
                    <button class="button is-primary" @click="save" v-else> 新建</button>
                </p>
                <p class="help">
                    {{ msg }}
                </p>
            </div>
        </section>
    </div>
</template>

<script>
    import bookmarkManager from '../libs/bookmarkManager'

    export default {
        name: 'bookmarkEditor',
        props: {
            bookmark: Object,
        },
        data () {
            return {
                msg: '',
                oldBookmark: {},
                levels: [],
            }
        },
        created () {
            this.oldBookmark = JSON.parse(JSON.stringify(this.bookmark));
            this.getData();
        },
        methods: {
            save () {
                console.log(7777, this.bookmark , this.oldBookmark)
                bookmarkManager.set(this.bookmark, this.oldBookmark).then(data => {
                    console.log('update', data)
                    this.close();
                })
            },
            cancel () {
                this.close()
            },
            close () {
                console.log('emit close', arguments)
                this.$emit('close')
            },
            async getData () {
                this.levels = await bookmarkManager.getSetting('levels');
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
