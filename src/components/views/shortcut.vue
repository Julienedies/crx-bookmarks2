<template>
    <div>
        <list-tool-bar :count="count"></list-tool-bar>
        <list :bookmarkArray="bookmarkArray" @contextmenu="onContextmenu"></list>
    </div>
</template>

<script>
    import listToolBar from '../listToolBar'
    import mixins from '../../mixins'
    import { bookmarks } from '../../libs/chrome'
    import getDb from '../../libs/db'

    const shortcutDb = getDb('shortcut')

    export default {
        name: 'shortcut',
        mixins: [mixins],
        components: {
            listToolBar
        },
        data () {
            return {
                bookmarkArray: []
            }
        },
        computed: {
            count () {
                return this.bookmarkArray.length
            }
        },
        created () {
            this.getData()

            let callback = (...args) => {
                console.log('db event listener', args)
                this.getData()
            }

            shortcutDb.on('*', callback)

            this.$once('hook:beforeDestroy', function () {
                shortcutDb.off('*', callback)
            })
        },
        methods: {
            async getData () {
                let idArray = await shortcutDb.get().then(data => {
                    return Object.keys(data)
                })
                this.bookmarkArray = await bookmarks.get(idArray).then(bookmarkArray => {
                    for (let bookmark of bookmarkArray) {
                        bookmark.shortcut = idArray.includes(bookmark.id)
                    }
                    return bookmarkArray
                })
            },
            onContextmenu(args){
                console.log('shortcut ', args)
                let menu = args[0]
                let bookmark = args[1]
                if(menu === 'remove'){
                    for(let [index, item] of this.bookmarkArray.entries()){
                        if(bookmark.id === item.id){
                            return this.bookmarkArray.splice(index, 1)
                        }
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
