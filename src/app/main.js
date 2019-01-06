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

/*import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)*/

/*import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
Vue.use(Vuetify)*/

import { getFavicon } from '../filters/index'

import routes from './routes'

import App from './App'

const router = new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

Vue.filter('getFavicon', getFavicon)

console.log(process.env)

new Vue({
    el: '#app',
    render: h => h(App),
    router
})



