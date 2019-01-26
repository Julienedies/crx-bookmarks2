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

import vueex from 'vueex'
Vue.use(vueex)

import install from '../app/install'
install(Vue)

import App from './App'

new Vue({
    el: '#app',
    render: (h) => h(App)
})

