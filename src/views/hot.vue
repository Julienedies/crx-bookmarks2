<template>
    <div>
        <tool-bar :count="count"></tool-bar>
        <list :bookmark-array="bookmarkArray">
            <template slot-scope="{bookmark}">
                <button @click="edit(bookmark)"><i class="fas fa-edit"></i></button>
                <button @click="remove(bookmark)"><i class="far fa-trash-alt"></i></button>
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
            }
        },
        mounted(){
            this.fetchData()
            visitDb.on('change', (args) => {
                let StorageEvent = args[0]
                this.fetchData()
            })
        },
        methods: {
            async fetchData(){
                let obj = await visitDb.get()
                let idArray = Object.keys(obj)
                console.log(idArray)
                if(idArray.length ){
                    this.bookmarkArray = await bookmarks.get(idArray)
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