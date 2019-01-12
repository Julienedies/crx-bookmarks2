/*!
 * chrome.bookmarks wrap
 * Created by j on 2019-01-05.
 */

const promise = {}

const bookmarks = chrome.bookmarks

const events = ['onCreated', 'onRemoved', 'onChanged', 'onMoved', 'onChildrenReordered', 'onImportBegan', 'onImportEnded']

let {entries} = Object


for (let [prop, value] of entries(bookmarks)) {

    // wrap methods of chrome.bookmarks as promise
    if (typeof value === 'function') {

        promise[prop] = ((prop => {

            return function (...args) {

                //let args = [].slice.call(arguments, 0)

                return new Promise((resolve, reject) => {
                    let call = (data) => {
                        console.log('chromeAPI => ', prop, data)
                        resolve(data)
                    }
                    args.push(call)
                    bookmarks[prop].apply(bookmarks, args)
                })

            }

        }))(prop)
    }

}


const api = {
    // wrap addListener for chrome.bookmarks
    on (event, callback) {
        let args = [].slice.call(arguments, 0);
        event = args[0]
        callback = args[1]
        callback = callback || event

        if (events.includes(event)) {
            // 监听单个事件
            bookmarks[event].addListener(callback)
        } else {
            // 监听所有事件, 所以填充一个事件类型在回调函数里
            for (let event of events) {
                bookmarks[event].addListener(((event) => {
                    return function () {
                        //console.log(event, arguments)
                        let args = [].slice.call(arguments, 0)
                        args.unshift(event)
                        callback.apply(null, args)
                    }
                })(event))
            }
        }
    },
    get (id) {
        return promise.get(id);
    },
    add (bookmark) {
        return this.create(bookmark);
    },
    create (bookmark) {
        let bk = {};
        bk.title = bookmark.title;
        bk.url = bookmark.url;
        if (bookmark.parentId) {
            bk.parentId = bookmark.parentId;
        }
        return promise.create(bk);
    },
    recover (bookmark) {
        let bk = {};
        bk.title = bookmark.title;
        bk.url = bookmark.url;
        bk.parentId = bookmark.parentId;
        bk.index = bookmark.index;
        return promise.create(bk);
    },
    remove (bookmark) {
        if (bookmark.url) {
            return promise.remove(bookmark.id);
        } else {
            return promise.removeTree(bookmark.id);
        }
    },
    update (bookmark) {
        let changes = {title: bookmark.title, url: bookmark.url};
        return promise.update(bookmark.id, changes);
    },
    move (bookmark, destination) {
        let id = typeof bookmark === 'object' ? bookmark.id : bookmark;
        return promise.move(id, destination);
    },
    getChildren (id) {
        return promise.getChildren(id);
    },
    getTree () {
        return promise.getTree();
    },
    getSubTree (id) {
        return promise.getSubTree(id);
    },
    getRecent (size) {
        return promise.getRecent(size || 100).then(function (r) {
            return r;
        });
    },
    search (query) {
        return promise.search(query);
    }
}

// 调试用
api.on(function (...args) {
    //let args = [].slice.call(arguments, 0)
    console.log(args[0], args)
})




export default api

export { promise }


