/*!
 * Created by j on 2019-01-02.
 */

import "core-js/modules/es6.promise";
import "core-js/modules/es6.array.iterator";

import home from '../views/home'
import recent from '../views/recent'
import trash from '../views/trash'

const hot = () => import(/* webpackChunkName: "view-hot" */'../views/hot')
const node = () => import(/* webpackChunkName: "view-node" */'../views/node')
const setting = () => import(/* webpackChunkName: "view-setting" */'../views/setting')
const search = () => import(/* webpackChunkName: "view-search" */'../views/search')

export default [
    {
        name: '首页',
        path: '/home',
        component: home
    },
    {
        name: '常用',
        path: '/hot',
        component: hot
    },
    {
        name: '最近',
        path: '/recent',
        component: recent
    },
    {
        name: '目录',
        path: '/node/:id',
        _path: '/node/38',
        component: node
    },
    {
        name: '回收站',
        path: '/trash',
        component: trash
    },
    {
        name: '设置',
        path: '/setting',
        component: setting
    },
    {
        name: 'search',
        path: '/search/:query',
        component: search
    },
    {
        path: '*',
        redirect: {
            path: '/recent'
        }
    }

]


