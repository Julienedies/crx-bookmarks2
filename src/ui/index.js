/*!
 * 
 * Created by j on 2019-01-11.
 */
import popup from './popup/popup'
import modal from './modal/modal.vue'
import $modal from './modal/index.js'


const components = {
    popup,
    modal
}

const install = function(Vue, opts = {}) {

    if(Vue.prototype.$modal){
        throw new Error ('命名冲突, Vue.prototype.$modal已经存在, 可以通过options.name重新命名.')
    }
    Vue.prototype.$modal = $modal

    // register components on global
    Object.keys(components).forEach(key => {
        Vue.component(key, components[key])
    })

}



const API = {
    install
}

export default API

export {
    modal,
    popup
}