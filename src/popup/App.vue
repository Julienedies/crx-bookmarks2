<template>
    <div class="box">

        <div class="">
            <div class="">
                <setBookmark></setBookmark>
            </div>

            <div style="text-align:right; padding:0.5rem;">
                <button class="button" @click="c='shortcut'">shortcut</button>
                <button class="button" @click="c='recent'">recent</button>
                <button class="button" @click="c='hot'">hot</button>
                <button class="button" @click="open">打开书签管理器</button>
            </div>

            <div class="">
                <component :is="c"></component>
            </div>
        </div>
    </div>
</template>

<script>
    import shortcut from '../views/shortcut'
    import recent from '../views/recent'
    import hot from '../views/hot'

    import { bookmarks, tabs } from '../libs/chrome/index'
    import getDb from '../libs/db'
    import setBookmark from './setBookmark'

    const visitDb = getDb('visit')

    export default {
        name: 'App',
        components: {
            setBookmark,
            shortcut,
            recent,
            hot
        },
        data () {
            return {
                c: 'recent'
            }
        },
        mounted () {
            this.getData()
        },
        methods: {
            async getData () {
                //this.recentBookmarkArray = await bookmarks.getRecent(100)
            },
            open () {
                tabs.create({url: './dist/app.html', selected: true})
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>