/*!
 * chrome.bookmarks wrapper
 * Created by j on 2019-01-05.
 */

import wrapApi from './util'

const events = ['onCreated', 'onRemoved', 'onChanged', 'onMoved', 'onChildrenReordered', 'onImportBegan', 'onImportEnded']

const promise = wrapApi(chrome.bookmarks)

const api = {
    on (eventName, listener) {
        return promise.on(eventName, listener)
    },
    get (id) {
        return promise.get(id)
    },
    add (bookmark) {
        return this.create(bookmark)
    },
    create (bookmark) {
        let bk = {}
        bk.title = bookmark.title
        bk.url = bookmark.url
        if (bookmark.parentId) {
            bk.parentId = bookmark.parentId
        }
        return promise.create(bk)
    },
    recover (bookmark) {
        let bk = {}
        bk.title = bookmark.title
        bk.url = bookmark.url
        bk.parentId = bookmark.parentId
        bk.index = bookmark.index
        return promise.create(bk)
    },
    remove (bookmark) {
        if (bookmark.url) {
            return promise.remove(bookmark.id)
        } else {
            return promise.removeTree(bookmark.id)
        }
    },
    update (bookmark) {
        let changes = {title: bookmark.title, url: bookmark.url}
        return promise.update(bookmark.id, changes)
    },
    move (bookmark, destination) {
        let id = typeof bookmark === 'object' ? bookmark.id : bookmark
        return promise.move(id, destination)
    },
    getChildren (id) {
        return promise.getChildren(id)
    },
    getTree (isOnlyFolder) {
        return promise.getTree().then(tree => {
            // 过滤书签树, 只保留文件夹
            function filter (tree) {
                let len = tree.length
                while (len--) {
                    let node = tree[len]
                    if (node.children) {
                        filter(node.children)
                    } else {
                        tree.splice(len, 1)
                    }
                }
            }
            isOnlyFolder && filter(tree)
            return tree
        })
    },
    getSubTree (id) {
        return promise.getSubTree(id)
    },
    getRecent (size) {
        return promise.getRecent(size || 100).then(function (r) {
            return r
        })
    },
    search (query) {
        return promise.search(query)
    }
}

// 调试用
api.on(function (...args) {
    console.log(args[0], args)
})


export default api



