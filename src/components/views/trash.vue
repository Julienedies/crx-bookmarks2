<template>
    <div>
        <tool-bar>
            <button @click="clear" class="flex-middle active" title="清空回收站"><i class="far fa-trash-alt"></i></button>
        </tool-bar>

        <list :bookmarkArray="bookmarkArray">
            <template slot-scope="{ bookmark }">
                <button @click="recover(bookmark)" title="恢复"><i class="fa fa-undo"></i></button>
                <button @click="remove(bookmark)"><i class="far fa-trash-alt"></i></button>
            </template>
        </list>
    </div>
</template>

<script>
    import toolBar from '../listToolBar'
    import list from '../list'
    import { bookmarks } from '../../libs/chrome'
    import getDb from '../../libs/db'
    import { mapState } from 'vuex'

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
        computed: {
            ...mapState({
                reverse:  state => state.ui.list.reverse
            })
        },
        created () {
            this.getData()
            let callback = (args) => {
                console.log('db event listener', args)
                this.bookmarkArray.unshift(args[0])
                //this.getData()
            }

            db.on('add', callback)

            this.$once('hook:beforeDestroy', function () {
                db.off('add', callback)
            })
        },
        methods: {
            async getData () {
                this.bookmarkArray = await db.get().then(obj => {
                    return Object.values(obj)
                })
                this.reverse && this.bookmarkArray.reverse()
            },
            recover (bookmark) {
                bookmarks.recover(bookmark)
                db.remove(bookmark)
                this._remove(bookmark)
            },
            remove (bookmark) {
                db.remove(bookmark)
                this._remove(bookmark)
            },
            clear () {
                if(confirm('确认清空回收站, 该操作不可撤销!')){
                    db.clear()
                    this.bookmarkArray = []
                }
            },
            _remove(bookmark){
                let index = this.bookmarkArray.findIndex((item) => item === bookmark)
                this.bookmarkArray.splice(index, 1)
            },
        },
        watch: {
            'reverse' (newVal) {
                this.bookmarkArray.reverse()
            },
            '$root.event' (newValue) {
                this.getData()
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>
