<template>
    <div>

        <tool-bar>
            <div class="column is-2 is-offset-10">
                <button @click="clear">清空回收站</button>
            </div>
        </tool-bar>
        <ul>
            <list-item v-for="bookmark of bookmarkArray" :bookmark="bookmark" :key="bookmark.id">
                <template slot="contextmenu">
                    <!--<button @click="recover(bookmark)" title="恢复"><i class="far fa-file-medical"></i></button>-->
                    <button @click="recover(bookmark)">恢复</button>
                    <button @click="remove(bookmark)"><i class="far fa-trash-alt"></i></button>
                </template>
            </list-item>
        </ul>
    </div>
</template>

<script>
    import toolBar from '../components/tool-bar'
    import listItem from '../components/listItem'
    import { bookmarks } from '../libs/chrome/index'
    import getDb from '../libs/db'

    const db = getDb('trash')

    export default {
        name: 'trash',
        components: {
            toolBar,
            listItem
        },
        data () {
            return {
                bookmarkArray: Array
            }
        },
        mounted () {
            this.fetchData()
            db.on('change', (args) => {
                let StorageEvent = args[0]
                this.fetchData()
            })
        },
        methods: {
            async fetchData () {
                this.bookmarkArray = await db.get()
            },
            recover (bookmark) {
                bookmarks.recover(bookmark)
                db.remove(bookmark)
            },
            remove (bookmark) {
                db.remove(bookmark)
            },
            clear () {
                db.clear()
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>