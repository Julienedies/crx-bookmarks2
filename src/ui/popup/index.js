/*!
 * popup组件js使用接口
 * Created by j on 2019-01-11.
 */

import Vue from 'vue'
import popup from './popup.vue'

let instance

function getInstance(options) {

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

function $popup(){



}



export default $popup