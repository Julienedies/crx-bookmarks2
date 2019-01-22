/*!
 * 
 * Created by j on 2019-01-10.
 */

/*setTimeout(() => {
    if(window.innerWidth < 1000)
    chrome.tabs.create({ url: './dist/app.html', selected: true })
}, 100)*/

import 'babel-polyfill'

import '../vendor/bulma/bulma.sass'
import '../css/common.scss'
import './style.scss'

import Vue from 'vue'
import App from './App'

import vueex from 'vueex'

Vue.use(vueex)

import * as filters from '../filters/index'
import * as directives from '../directives/index'

Vue.filter('getFavicon', filters.getFavicon)
Vue.directive('toggle', directives.toggle)

console.log(vueex)

new Vue({
    el: '#app',
    render: (h) => h(App)
})

