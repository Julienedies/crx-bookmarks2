<template>
    <div>
        <tool-bar :count="count"></tool-bar>
        <list :bookmark-array="bookmarkArray">
            <template slot-scope="{bookmark}">
                <button @click="edit(bookmark)"><i class="fas fa-edit"></i></button>
                <button @click="remove(bookmark)"><i class="far fa-trash-alt"></i></button>
                <button>{{ bookmark.visit.count }}</button>
            </template>
        </list>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {bookmarks} from '../libs/chrome/index'
    import getDb from '../libs/db'
    import list from '../components/list'
    import toolBar from '../components/tool-bar'
    import popup from '../vueex/popup/popup'
    import bookmarkEditor from '../components/bookmarkEditor'

    const visitDb = getDb('visit')

    export default {
        name: 'hot',
        components: {
            toolBar,
            list,
            bookmarkEditor
        },
        data(){
          return {
              bookmarkArray: []
          }
        },
        computed: {
            count(){
                return this.bookmarkArray.length
            },
        },
        mounted(){
            this.fetchData()
            visitDb.on('change', (args) => {
                let StorageEvent = args[0]
                this.fetchData()
            })
        },
        beforeDestroy (){
            visitDb.off('change')
        },
        methods: {
            async fetchData(){
                let visitObj = await visitDb.get()
                let idArray = Object.keys(visitObj)
                console.log(idArray)
                if(idArray.length ){
                    /* 无效数据清洗
                    for(let id of idArray){
                        let b = await bookmarks.get(id)
                        if(!b){
                            console.log(id)
                            visitDb.remove(id)
                        }else{
                            this.bookmarkArray.push(b[0])
                        }
                    }*/
                    let bookmarkArray = await bookmarks.get(idArray)
                    bookmarkArray.forEach(bookmark => {
                        bookmark.visit = visitObj[bookmark.id]
                    })
                    this.bookmarkArray = bookmarkArray
                }
            },
            remove(){

            },
            edit(bookmark){

                const vm = new Vue({
                    components: {
                        popup
                    },
                    data: {
                       visible: true
                    },
                    render(h){
                        let child = h(bookmarkEditor, {slot:'default', props:{
                            bookmark: bookmark
                            },
                            on: {
                                'close': (...args) => {
                                    this.visible = false
                                }
                            }
                        })
                        let popupOptions = {
                            props:{
                                value: this.visible
                            },
                        }
                        return h(popup, popupOptions, [child])
                    }
                })
                vm.$mount(document.createElement('div'))
                document.body.appendChild(vm.$el)

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>