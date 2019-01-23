/*!
 * 管理数据存储
 * Created by j on 2019-01-12.
 */

import EventEmitter from 'events'

import { storage } from './chrome/index'

const emitter = new EventEmitter()

window.addEventListener('storage', (event) => {
    console.log('window.storage event', +new Date, event)
    let {key, oldValue, newValue} = event
    let e
    let arg
    let name = key.split(/[^\w]+/)[0]
    if (!oldValue && newValue) {
        e = 'add'
        arg = newValue
    }
    if (oldValue && !newValue) {
        e = 'remove'
        arg = oldValue
    }
    if (oldValue && newValue) {
        e = 'change'
        arg = newValue
    }
    LISTENER.forEach(o => {
        if (o.namespace === name) {
            o.emit(e, arg, event)
        }
    })
})

const LISTENER = []

function removeFormArray (value, array) {
    let index = array.findIndex(item => item === value)
    if (typeof index === 'number') {
        array.splice(index, 0)
    }
}

class Db {
    static getAll () {
        return JSON.parse(JSON.stringify(localStorage))
    }

    static init (data) {
        Object.entries(data).forEach(arr => {
            let key = arr[0]
            let val = arr[1]
            console.log(key, val)
            localStorage.setItem(arr[0], arr[1])
        })
    }

    constructor (namespace) {
        if (!(this instanceof Db)) return new Db(namespace)
        this.namespace = namespace
        this.separator = '.'
        this._on = {}
    }

    on (eventName, listener) {
        eventName = this.prefix(eventName)
        if (!LISTENER.includes(this)) {
            LISTENER.push(this)
        }
        this._on[eventName] = true
        emitter.on(eventName, listener)
    }

    off (eventName, listener) {
        eventName = this.prefix(eventName)
        delete this._on[eventName]
        if (Object.keys(this._on).length === 0) {
            removeFormArray(this, LISTENER)
        }
        emitter.removeListener(eventName, listener)
    }

    emit (eventName, ...args) {
        eventName = this.prefix(eventName)
        args.push(eventName)
        if (this._on[eventName]) {
            emitter.emit(eventName, args)
        } else {
            console.log('Not listener for ', eventName, args)
        }
    }

    prefix (val = '') {
        return `${ this.namespace }${ this.separator }${ val }`
    }
}


const methods = {

    get (record) {
        let namespace = this.prefix()
        let result = {}
        let id = typeof record === 'object' ? record.id : record

        if (id) {
            return JSON.parse(localStorage.getItem(this.prefix(id)))
        } else {
            for (let i in localStorage) {
                if (i.indexOf(namespace) === 0) {
                    id = i.replace(namespace, '') || this.namespace
                    result[id] = JSON.parse(localStorage[i])
                }
            }
            return result
        }

    },

    set (record) {
        let namespace = this.namespace + '.'
        let id = record.id || Math.random().toFixed(8).replace('0.', '')
        id = this.prefix(id)
        localStorage.setItem(id, JSON.stringify(record))
    },

    remove (record) {
        let id = typeof record === 'object' ? record.id : record
        localStorage.removeItem(this.prefix(id))
    },

    clear () {
        let namespace = this.prefix()

        for (let i in localStorage) {
            if (i.indexOf(namespace) === 0) {
                localStorage.removeItem(i)
            }
        }
    },

    sync () {
        let result = {}
        result[this.namespace] = this.get()
        return storage.set(result)
    }

}

// 包装一些方法到promise, 方便以后改变存储方式
Object.keys(methods).forEach(key => {
    Db.prototype[key] = function (...args) {
        const that = this
        const method = methods[key]
        return new Promise(function (resolve, reject) {
            let result = method.apply(that, args)
            console.log(`Db ${ that.namespace } exec db.${ key }, return => `, result)

            if (/set|clear/.test(key)) {
                console.log(`emit ${ that.namespace } change.`);
                that.emit('change', key, result)
            }

            resolve(result)
        })
    }
})


export default function getDb (namespace) {
    return new Db(namespace)
}

export { Db }
