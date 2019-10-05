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
                <div class="help">
                    <label class="checkbox" v-for="(v, i) in tags" :key="v" :for="'tag'+i">
                        <input type="checkbox" name="tag" :id="'tag'+i" :value="v" @change="setTag" v-model="tag">
                        {{v}} &nbsp;
                    </label>
                </div>
            </div>

            <div class="field">
                <label class="label">level</label>
                <div class="control">
                    <label class="radio" v-for="v in levels">
                        <input type="radio" name="level" :value="v" :checked="v===bookmark.level" v-model="bookmark.level">
                        {{ v }}级
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
    import _ from 'lodash'
    import bookmarkManager from '../libs/bookmarkManager'
    import setting from '../libs/setting'

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
                tags: [],
                tag: [],
            }
        },
        created () {
            this.oldBookmark = JSON.parse(JSON.stringify(this.bookmark));
            this.getData();
        },
        methods: {
            save () {
                console.log(7777, this.bookmark, this.oldBookmark)
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
            setTag () {
                if (this.tag.length) {
                    let oldTag = this.bookmark.tag;
                    let oldTags = oldTag ? oldTag.split(/\s*,\s*/img) : [];
                    let arr = oldTags.concat(this.tag);
                    arr = _.uniq(arr);
                    this.bookmark.tag = arr.join(',');
                }
            },
            async getData () {
                this.levels = await setting.get('levels');
                this.tags = await bookmarkManager.getAllTag().then((data) => {
                    return Object.keys(data);
                });
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
