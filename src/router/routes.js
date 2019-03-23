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
        title: '首页',
        name: 'home',
        path: '/home',
        component: home
    },
    {
        title: '常用',
        name: 'hot',
        path: '/hot',
        component: hot
    },
    {
        title: '最近',
        name: 'recent',
        path: '/recent',
        component: recent
    },
    {
        title: '目录',
        name: 'node',
        path: '/node/:id',
        _path: '/node/1',
        component: node
    },
    {
        title: '',
        name: 'treemap',
        path: '/treemap',
        component: treemap
    },
    {
        title: 'tree',
        name: 'tree',
        path: '/tree',
        component: tree
    },
    {
        title: '目录',
        name: 'trash',
        path: '/trash',
        component: trash
    },
    {
        title: '设置',
        name: 'setting',
        path: '/setting',
        component: setting
    },
    {
        title: 'search',
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


