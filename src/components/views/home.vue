<template>
    <div>
        <div class="box">
            <div class="columns">
                <div class="column is-8">
                    <div class="tags">
                        <a class="tag is-medium" v-for="(v,k,i) in tagMap" :class="{'is-info':byTag===k}" @click="getByTag(k)">
                            {{ k }} <sup>{{ v.length }}</sup>
                        </a>
                    </div>
                </div>
                <div class="column is-4">
                    <div class="tags">
                        <a class="tag" v-for="v in levels" :class="{'is-info':byLevel===v}" @click="getByLevel(v)">
                            {{ v }}级
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <tool-bar :count="count"></tool-bar>
        <list :bookmarkArray="bookmarkArray"></list>
    </div>
</template>

<script>
    import list from '../list'
    import toolBar from '../listToolBar'
    import { mapState } from 'vuex'
    import getDb from '../../libs/db'
    import setting from '../../libs/setting'
    import bookmarkManager from '../../libs/bookmarkManager'

    const jbmDb = getDb('jbm');

    export default {
        name: 'home',
        components: {
            list,
            toolBar
        },
        data () {
            return {
                tagMap: [],
                levels: [],
                byLevel: 1,
                byTag: '',
                bookmarkArray: [],
            }
        },
        created () {
            this.getData();

            let cb = (...args) => {
                console.log('jbmDb event listener', args)
                this.getData();
            }

            // 关于jbmDb事件监听不起作用, 而visitDb正确工作
            // 1是因为visitDb 是通过 storage 事件触发
            // 同页面内 localStorage 操作不会触发 storage 事件
            // 2 是因为listItem 里的shortDb 和 这里的shortDb 是两个实例
            // 解决办法: 使jbmDb变成单例模式
            jbmDb.on('*', cb)

            this.$once('hook:beforeDestroy', function () {
                jbmDb.off('*', cb)
            });
        },
        computed: {
            ...mapState({
                reverse: state => state.ui.list.reverse
            }),
            count () {
                return this.bookmarkArray.length
            },
        },
        methods: {
            async getData () {
                this.tagMap = await bookmarkManager.getAllTag();
                this.levels = await setting.get('levels');
                this.byLevel ? this.getByLevel(this.byLevel) : this.getByTag(this.byTag);
            },
            async getByTag (tag) {
                this.byTag = tag;
                this.byLevel = 0;
                this.bookmarkArray = await bookmarkManager.getByTag(tag);
            },
            async getByLevel (level) {
                this.byLevel = level;
                this.byTag = '';
                this.bookmarkArray = await bookmarkManager.getByLevel(level);
            },
        },
        watch: {
            '$root.event' () {
                this.getData()
            },
            'reverse' (newVal) {
                this.bookmarkArray.reverse()
            },
        }
    }
</script>

<style lang="scss" scoped>

    sup {
        vertical-align: 5px;
        font-size: 0.6em;
        padding-left: 0.4em;
        opacity: 0.4;
    }
</style>
