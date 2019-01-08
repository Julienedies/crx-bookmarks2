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

import { getFavicon } from '../filters/index'

Vue.filter('getFavicon', getFavicon)

import App from './App'

console.log(process.env)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})



