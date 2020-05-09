/*!
 * register components in global
 * Created by j on 2019-01-26.
 */

import * as filters from '../../filters'
import * as directives from '../../directives'

import components from '../../components'

export default function (Vue) {

    Vue.filter('getFavicon', filters.getFavicon)
    Vue.filter('hex2Rgb', filters.hex2Rgb)
    Vue.directive('toggle', directives.toggle)

    Vue.prototype.$hex2Rgb = filters.hex2Rgb;

    Vue.prototype.$sortBookmarksBy = function sortBookmarksBy (bookmarkArray, sortBy) {
        return bookmarkArray.sort((a, b) => {
            //console.log(a)
            if (sortBy === 'url') {
                let reg = /^\w+:\/\/\/?([\w.]+)/i
                let urlA = a.url || ''
                let urlB = b.url || ''
                let x = urlA.match(reg) || []
                let y = urlB.match(reg) || []
                x = x[0] || ''
                y = y[0] || ''
                console.log(x, y)
                return x === y ? 0 : x.length - y.length
            }
            if (sortBy === 'children') {
                let x = a.children ? 0 : 1
                let y = b.children ? 0 : 1
                return x - y
            }
            return a[sortBy] - b[sortBy]
        })
    }

    Object.entries(components).forEach(([key, component]) => {
        Vue.component(key, component)
    })

}
