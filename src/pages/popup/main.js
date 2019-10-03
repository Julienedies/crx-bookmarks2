/*!
 * popup html entry
 * Created by j on 2019-01-10.
 */

/*setTimeout(() => {
    if(window.innerWidth < 1000)
    chrome.tabs.create({ url: './dist/app.html', selected: true })
}, 100)*/

import 'babel-polyfill'

import '@fortawesome/fontawesome-free/css/all.css'

import 'hint.css/hint.css'
import '../../vendor/bulma/bulma.sass'
import '../../css/common.scss'
import './style.scss'

import Vue from 'vue'

import router from '../../router/index'
import store from '../../vuex/index'

import vueex from 'vueex'
Vue.use(vueex)

import install from '../app/install'
install(Vue)

import App from './App'
import { bookmarks } from '../../libs/chrome'

new Vue({
    el: '#app',
    router,
    store,
    data: {
        event: {
            name: '',
            args: ''
        }
    },
    mounted () {
        let that = this;
        bookmarks.on(function (eventName, ...args) {
            console.log('bookmarks event => ', eventName, args)
            that.event = {name: eventName, args: args}
        });
    },
    render: (h) => h(App)
});

