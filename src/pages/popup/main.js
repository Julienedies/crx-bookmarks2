/*!
 * popup html entry
 * Created by j on 2019-01-10.
 */

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

import { bookmarks } from '../../libs/chrome'

import setting from '../../libs/setting'

import App from './App'


new Vue({
    el: '#app',
    router,
    store,
    data: {
        event: {
            name: '',
            args: ''
        },
        levelsColorMap: {}
    },
    mounted () {
        let that = this;
        bookmarks.on(function (eventName, ...args) {
            console.log('bookmarks event => ', eventName, args)
            that.event = {name: eventName, args: args}
        });
        let cb = (...args) => {
            console.log('jSetDb listener', args);
            this.getData();
        };
        setting.on('*', cb);

        this.getData();
    },
    methods: {
        async getData () {
            this.settingMap = await setting.get();
            this.levelsColorMap = this.settingMap['levelsColorMap'] || {};
        }
    },
    render: (h) => h(App)
});

