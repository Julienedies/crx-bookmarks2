/*!
 * 
 * Created by j on 2019-01-17.
 */

import Vue from 'vue'
import { popup } from 'vueex'
import bookmarkEditor from '../components/bookmarkEditor'

let vm

const options = {
    data: {
        visible: true,
        bookmark: null
    },
    render (h) {
        let child = this.bookmark && h(bookmarkEditor, {
            slot: 'default',
            props: {
                bookmark: this.$clone(this.bookmark)
            },
            on: {
                'close': (...args) => {
                    this.visible = false
                    this.bookmark = null
                }
            }
        })
        let popupOptions = {
            props: {
                value: this.visible
            },
            on: {
                'cancel': () => {
                    this.visible = false
                    this.bookmark = null
                },
                'input': (val) => {
                    this.visible = val
                }
            },
            directives: [{
            }]
        }
        return h(popup, popupOptions, [child])
    }
}


function getInstance () {
    if (!vm) {
        vm = vm || new Vue(options)
        vm.$mount(document.createElement('div'))
        document.body.appendChild(vm.$el)
    }
    return vm
}

function editBookmark (bookmark) {
    vm = getInstance()
    vm.bookmark = bookmark
    vm.visible = true
    console.log('edit', vm)
}

export function createSubFolder (bookmark) {
    editBookmark({title: '新建文件夹', parentId: bookmark.id})
}

export default editBookmark
