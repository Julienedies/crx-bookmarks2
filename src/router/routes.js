/*!
 * Created by j on 2019-01-02.
 */

import "core-js/modules/es6.promise";
import "core-js/modules/es6.array.iterator";

import home from '../views/home'
import recent from '../views/recent'
import trash from '../views/trash'

const hot = () => import('../views/hot')
const node = () => import('../views/node')
const setting = () => import('../views/setting')
const search = () => import('../views/search')

export default [
    {
        name: '首页',
        path: '/home',
        component: home
    },
    {
        name: '最近',
        path: '/recent',
        component: recent
    },
    {
        name: '常用',
        path: '/hot',
        component: hot
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
            path: '/node/38'
        }
    }

]

/*
export const paths = [
    ['/home', '首页'],
    ['/node/1', '目录'],
    ['/recent', '最近'],
    ['/trash', '回收站'],
    ['/setting', '设置']
]*/
