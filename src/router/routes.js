/*!
 * Created by j on 2019-01-02.
 */

import "core-js/modules/es6.promise";
import "core-js/modules/es6.array.iterator";

import home from '../components/views/home'
import recent from '../components/views/recent'
import trash from '../components/views/trash'

const hot = () => import(/* webpackChunkName: "view-hot" */'../components/views/hot')
const node = () => import(/* webpackChunkName: "view-node" */'../components/views/node')
const setting = () => import(/* webpackChunkName: "view-setting" */'../components/views/setting')
const search = () => import(/* webpackChunkName: "view-search" */'../components/views/search')
const tree = () => import(/* webpackChunkName: "view-search" */'../components/views/tree')
const treemap = () => import(/* webpackChunkName: "view-search" */'../components/views/treemap')

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
        name: 'treemap',
        path: '/treemap',
        component: treemap
    },
    {
        name: 'tree',
        path: '/tree',
        component: tree
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


