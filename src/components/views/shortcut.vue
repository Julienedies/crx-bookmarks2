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
    import bookmarkManager from '../../libs/bookmarkManager'
    const jbmDb = getDb('jbm');

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
                console.log('jbmDb event listener', args)
                this.getData()
            }

            // 关于jbmDb事件监听不起作用, 而visitDb正确工作
            // 1是因为visitDb 是通过 storage 事件触发
            // 同页面内 localStorage 操作不会触发 storage 事件
            // 2 是因为listItem 里的shortDb 和 这里的shortDb 是两个实例
            // 解决办法: 使jbmDb变成单例模式
            //jbmDb.on('*', callback)

            this.$once('hook:beforeDestroy', function () {
                //jbmDb.off('*', callback)
            });
        },
        methods: {
            async getData () {
                let idArray = await jbmDb.get().then(resultMap => {
                    let result = [];
                    for (let i in resultMap){
                        let item = resultMap[i];
                        if(item.level ===1){
                            result.push(i);
                        }
                    }
                    return result;
                })
                this.bookmarkArray = await bookmarkManager.get(idArray).then(bookmarkArray => {
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
