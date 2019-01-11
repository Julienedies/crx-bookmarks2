/*!
 * chrome.bookmarks wrap
 * Created by j on 2019-01-05.
 */

const api = {}

const bookmarks = chrome.bookmarks

const events = ['onCreated', 'onRemoved', 'onChanged', 'onMoved', 'onChildrenReordered', 'onImportBegan', 'onImportEnded']

let {entries} = Object


for (let [prop, value] of entries(bookmarks)) {

    // wrap methods of chrome.bookmarks as promise
    if (typeof value === 'function') {

        api[prop] = ((prop => {

            return function () {

                let args = [].slice.call(arguments, 0)

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

// wrap addListener for chrome.bookmarks
api.on = function (event, callback) {
    let args = [].slice.call(arguments, 0);
    event = args[0]
    callback = args[1]
    callback = callback || event

    if (events.includes(event)) {
        bookmarks[event].addListener(callback)
    } else {
        for (let event of events) {
            bookmarks[event].addListener(((event) => {
                return function () {
                    console.log(event, arguments)
                    let args = [].slice.call(arguments, 0)
                    args.unshift(event)
                    callback.apply(null, args)
                }
            })(event))
        }
    }
}


api.on(function (eventName) {
    let args = [].slice.call(arguments, 0)
    console.log(eventName, args)
})


export default api

export class Bookmark {
    constructor(options) {
        Object.assign(this, options)
    }
    update() {
        return api.update(this.id, {
            title: this.title,
            url: this.url
        })
    }
}