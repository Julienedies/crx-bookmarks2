<template>
    <div>
        <tool-bar>
            <button @click="clear" class="flex-middle"> <span>清空回收站</span>&nbsp;&nbsp; <i class="far fa-trash-alt"></i></button>
        </tool-bar>

        <list :bookmarkArray="bookmarkArray">
            <template slot-scope="{ bookmark }">
                <button @click="recover(bookmark)">恢复</button>
                <button @click="remove(bookmark)"><i class="far fa-trash-alt"></i></button>
            </template>
        </list>
    </div>
</template>

<script>
    import { bookmarks } from '../libs/chrome/index'
    import getDb from '../libs/db'
    import toolBar from '../components/listToolBar'
    import list from '../components/list'

    const db = getDb('trash')

    export default {
        name: 'trash',
        components: {
            toolBar,
            list
        },
        data () {
            return {
                bookmarkArray: []
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
                this.bookmarkArray = await db.get().then(obj => {
                    console.log(obj)
                    return Object.values(obj)
                })
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