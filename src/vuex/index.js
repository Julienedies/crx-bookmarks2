/*!
 * 
 * Created by j on 2019-01-07.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules/index'

Vue.use(Vuex)

export default new Vuex.Store({
    modules
})