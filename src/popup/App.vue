<template>
    <div class="box" v-cloak>
        <div style="text-align:right; padding:0.5rem;">
            <button class="button" @click="open">打开书签管理器</button>
        </div>
        <div class="">
            <div class="">
                <add></add>
            </div>
            <div class="">
                <recent></recent>
            </div>
        </div>
    </div>
</template>

<script>
    import { bookmarks, tabs } from '../libs/chrome/index'
    import getDb from '../libs/db'
    import recent from '../views/recent'
    import add from './add'

    const visitDb = getDb('visit')

    export default {
        name: 'App',
        components: {
            add,
            recent
        },
        data(){
            return {
                recentBookmarkArray: [],
                visitBookmarkArray: []
            }
        },
        mounted(){
            this.getData()
        },
        methods: {
            async getData(){
                this.recentBookmarkArray = await bookmarks.getRecent(100)
            },
            open(){
                tabs.create({ url: './dist/app.html', selected: true })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>