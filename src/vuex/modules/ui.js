/*!
 * 
 * Created by j on 2019-01-22.
 */

const state = {
    list: {
        reverse: false,
        showType: 'list',
        orderBy: 'index'
    }
}

const getters = {}

const mutations = {
    updateUi (state, [key, value]) {
        let keys = key.split('.')
        let obj = state
        while (keys.length >= 2) {
            obj = obj[keys.shift()]
        }
        obj[keys.shift()] = value
    }
}

const actions = {}

export default {
    state,
    getters,
    actions,
    mutations
}