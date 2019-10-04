<template>
    <div>
        <div class="box">
            <div class="columns">
                <div class="column is-8">
                    <div class="tags">
                        <a class="tag" v-for="(v,k,i) in tagMap" @click="getByTag(k)">
                            {{ k }} {{ v.length }}
                        </a>
                    </div>
                </div>
                <div class="column is-4">
                    <div class="tags">
                        <a class="tag" v-for="(v,i) in levels" :style="{color:v.color}" @click="getByLevel(v.value)">
                            {{ v.value }}级
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <list :bookmarkArray="bookmarkArray"></list>
    </div>
</template>

<script>
    import shortcut from './shortcut'
    import getDb from '../../libs/db'
    import bookmarkManager from '../../libs/bookmarkManager'

    const jbmDb = getDb('jbm');

    export default {
        name: 'home',
        components: {
            shortcut,
        },
        data () {
            return {
                tagMap: [],
                levels: [],
                bookmarkArray: [],
            }
        },
        created () {
            this.getData();
            let callback = (...args) => {
                console.log('jbmDb event listener', args)
                this.getData();
            }

            // 关于jbmDb事件监听不起作用, 而visitDb正确工作
            // 1是因为visitDb 是通过 storage 事件触发
            // 同页面内 localStorage 操作不会触发 storage 事件
            // 2 是因为listItem 里的shortDb 和 这里的shortDb 是两个实例
            // 解决办法: 使jbmDb变成单例模式
            jbmDb.on('*', callback)

            this.$once('hook:beforeDestroy', function () {
                jbmDb.off('*', callback)
            });
        },
        methods: {
            async getData () {
                this.tagMap = await bookmarkManager.getAllTag();
                this.levels = await bookmarkManager.getSetting('levels');
            },
            async getByTag (tag) {
                this.bookmarkArray = await bookmarkManager.getByTag(tag);
            },
            async getByLevel (level) {
                this.bookmarkArray = await bookmarkManager.getByLevel(level);
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>
