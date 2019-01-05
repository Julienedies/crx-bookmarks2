/*!
 * chrome.bookmarks promise封装
 * Created by j on 2019-01-05.
 */

const api = {}

const bookmarks = chrome.bookmarks

for(let prop in bookmarks) {

    api[prop] = ( (prop => {

        return function(){

            let args = Array.prototype.slice.call(arguments, 0)

            return new Promise( (resolve, reject ) => {
                let call = (data) => resolve(data)
                args.push(call)
                bookmarks[prop].apply(bookmarks, args)
            })

        }

    }))(prop)
}


export default api