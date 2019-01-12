<template>
    <div>
        <ul>
            <list-item v-for="bookmark of bookmarkArray" :bookmark="bookmark" :key="bookmark.id">
                <template slot="contextmenu">
                    <button @click="edit(bookmark)"><i class="fas fa-edit"></i></button>
                    <button @click="remove(bookmark)"><i class="far fa-trash-alt"></i></button>
                </template>
            </list-item>
        </ul>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {bookmarks} from '../libs/chrome/index'
    import getDb from '../libs/db'
    import listItem from '../components/listItem'
    import popup from '../ui/popup/popup'
    import editBookmark from '../components/editBookmark'

    const visitDb = getDb('visit')

    export default {
        name: 'hot',
        components: {
            listItem
        },
        data(){
          return {
              bookmarkArray: Array
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
                this.bookmarkArray = await bookmarks.get(idArray)
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
                        let child = h(editBookmark, {slot:'default', props:{
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