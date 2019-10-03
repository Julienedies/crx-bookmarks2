/*!
 * chrome.bookmarks wrapper
 * Created by j on 2019-01-05.
 */

import wrapApi from './wrapApi'

const events = ['onCreated', 'onRemoved', 'onChanged', 'onMoved', 'onChildrenReordered', 'onImportBegan', 'onImportEnded']

const chromeBookmarksPromise = wrapApi(chrome.bookmarks, {name: 'bookmarks'})

const api = {
    on (eventName, listener) {
        return chromeBookmarksPromise.on(eventName, listener)
    },
    get (id) {
        return chromeBookmarksPromise.get(id)
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
        return chromeBookmarksPromise.create(bk)
    },
    recover (bookmark) {
        let bk = {}
        bk.title = bookmark.title
        bk.url = bookmark.url
        bk.parentId = bookmark.parentId
        bk.index = bookmark.index
        return chromeBookmarksPromise.create(bk)
    },
    remove (bookmark) {
        if (bookmark.url) {
            return chromeBookmarksPromise.remove(bookmark.id)
        } else {
            return chromeBookmarksPromise.removeTree(bookmark.id)
        }
    },
    update ({id, title, url, parentId}) {
        if(parentId) {
            return this.move(id, {parentId}).then( (data) => {
                return chromeBookmarksPromise.update(id, {title, url})
            })
        }
    },
    move (bookmark, destination) {
        let id = typeof bookmark === 'object' ? bookmark.id : bookmark
        return chromeBookmarksPromise.move(id, destination)
    },
    getChildren (id) {
        return chromeBookmarksPromise.getChildren(id)
    },
    getTree (isOnlyFolder) {
        return chromeBookmarksPromise.getTree().then(tree => {
            // 过滤书签树, 只保留文件夹
            function filter (tree) {
                let len = tree.length
                while (len--) {
                    let node = tree[len]
                    node.title = node.title || '根目录'
                    node.name = node.title
                    if (node.children) {
                        node.value = node.children.length
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
    getSubTree (id, isOnlyFolder) {
        return chromeBookmarksPromise.getSubTree(id).then((data) => {
            // 过滤书签树, 只保留文件夹
            function filter (tree) {
                let len = tree.length
                while (len--) {
                    let node = tree[len]
                    node.name = node.title || 'root'
                    if (node.children) {
                        node.value = node.children.length
                        filter(node.children)
                    } else {
                        tree.splice(len, 1)
                    }
                }
            }

            isOnlyFolder && filter(data)
            return data
        })
    },
    getRecent (size) {
        return chromeBookmarksPromise.getRecent(size || 100)
    },
    search (query) {
        return chromeBookmarksPromise.search(query)
    }
}

export default api



