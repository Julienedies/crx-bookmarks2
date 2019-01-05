/*!
 * Created by j on 2019-01-02.
 */

import "core-js/modules/es6.promise";
import "core-js/modules/es6.array.iterator";

import home from '../views/home'
import recent from '../views/recent'
import trash from '../views/trash'

const node = () => import('../views/node')
const setting = () => import('../views/setting')

export default [
    {
        path: '/home',
        component: home
    },
    {
        path: '/recent',
        component: recent
    },
    {
        path: '/node',
        component: node
    },
    {
        path: '/setting',
        component: setting
    },
    {
        path: '/trash',
        component: trash
    }

]

export const paths = [
    'home',
    'node',
    'recent',
    'trash',
    'setting'
]