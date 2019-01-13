/*!
 * 
 * Created by j on 2019-01-11.
 */

import { bookmarks, tabs } from '../libs/chrome/index'

import getDb from '../libs/db'

const trashDb = getDb('trash')
const visitDb = getDb('visit')

// 当一个书签被删除, 把它保存到db
bookmarks.on( 'onRemoved', function(id,  changeInfo) {

    let obj = {
        index: changeInfo.index,
        parentId: changeInfo.parentId,
        ...changeInfo.node
    }

    console.log('保存到回收站', obj)

    trashDb.set(obj)

})

const f = function(tab){
    if(!tab.url) return
    bookmarks.search(tab.url).then(list => {
        list.forEach(bookmark => {
            if(bookmark.url === tab.url){
                console.log('添加新访问记录 => ', bookmark)
                visitDb.get(bookmark.id).then(record => {
                    record = record  || {id:bookmark.id, count: 0}
                    record.count += 1
                    visitDb.set(record)
                })
            }
        })
    })
}


// 记录浏览器访问记录, 统计最常使用的书签
tabs.on('onCreated', (tab, event)=> {
    f(tab)
})

tabs.on('onUpdated', function (tabId, changeInfe, tab, event) {
    console.log(tab.status)
    tab.status === 'complete' && f(tab)
})

/*tabs.on('onReplaced', function (addedTabId, removedTabId, event) {
    tabs.get(addedTabId).then(tab => {
        f(tab)
    })
})*/
