/*!
 * Created by j on 2018-12-24.
 */

import 'babel-polyfill'

import '@fortawesome/fontawesome-free/css/all.css'

import '../vendor/bulma/bulma.sass'
import '../vendor/hover/scss/hover.scss'
import './style.scss'

import Vue from 'vue'

/*import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)*/

/*import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
Vue.use(Vuetify)*/

import router from '../router/index'
import store from '../vuex/index'

import * as filters from '../filters/index'
import * as directives from '../directives/index'

Vue.filter('getFavicon', filters.getFavicon)
Vue.directive('toggle', directives.toggle)

import App from './App'

import {bookmarks} from '../libs/chrome/index'

import vueex from '../vueex/index'
Vue.use(vueex)


console.log(process.env)

window.v = new Vue({
    el: '#app',
    router,
    store,
    data: {
        event: {
            name: '',
            args: ''
        }
    },
    mounted() {
        let that = this;
        bookmarks.on(function (eventName) {
            let args = [].slice.call(arguments, 0)
            that.event = {name: eventName, args: args}
        });
    },
    render: h => h(App)
})



