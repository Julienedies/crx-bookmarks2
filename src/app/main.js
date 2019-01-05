/*!
 * Created by j on 2018-12-24.
 */

import 'babel-polyfill'

import '../vendor/bulma/bulma.sass'
import './style.scss'

import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

Vue.use(Vuex)
Vue.use(VueRouter)

/*import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)*/

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

import { getFavicon } from '../filters/index'

import routes from './routes'

import App from './App'

const router = new VueRouter({
    routes
})

Vue.filter('getFavicon', getFavicon)

console.log(process.env)

new Vue({
    el: '#app',
    render: h => h(App),
    router
})



