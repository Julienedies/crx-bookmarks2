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
    let e = ''
    let arg = null
    let obj = null
    let name = key.split(/[^\w]+/)[0]
    if (!oldValue && newValue) {
        e = 'add'
        arg = newValue
    } else if (oldValue && !newValue) {
        e = 'remove'
        arg = oldValue
    } else if (oldValue && newValue) {
        e = 'change'
        arg = newValue
    }

    try {
        obj = JSON.parse(arg)
    } catch (e) {
        console.log(e)
        obj = null
    }
    LISTENER.forEach(dbInstance => {
        if (dbInstance.namespace === name) {
            dbInstance.emit(e, obj || arg, event)
        }
    })
})

// 存储db实例 dbInstance, 使用单例模式和事件监听管理
// 之所以使用单例模式, 是因为单例模式事件监听触发才能正确工作
const LISTENER = []
const INSTANCES = []

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

    static getInstance (name) {
        for (let instance of INSTANCES) {
            if (instance.namespace === name) {
                return instance
            }
        }
        return false
    }

    static remove (key) {
        localStorage.removeItem(key)
    }

    constructor (namespace) {
        if (!(this instanceof Db)) return new Db(namespace);
        let instance = Db.getInstance(namespace)
        if (instance) return instance;
        INSTANCES.push(this)
        this.namespace = namespace
        this.separator = '.'
        this._on = {}
    }

    on (eventName, listener) {
        eventName = this._prefix(eventName)
        if (!LISTENER.includes(this)) {
            LISTENER.push(this)
        }
        this._on[eventName] = true
        emitter.on(eventName, listener)
    }

    off (eventName, listener) {
        eventName = this._prefix(eventName)
        //delete this._on[eventName]
        if (Object.keys(this._on).length === 0) {
            removeFormArray(this, LISTENER)
        }
        emitter.removeListener(eventName, listener)
    }

    emit (eventName, ...args) {
        eventName = this._prefix(eventName)
        let glob = this._prefix('*')
        if (this._on[glob]) {
            args.unshift(eventName)
            emitter.emit(glob, args)
        } else if (this._on[eventName]) {
            args.push(eventName)
            emitter.emit(eventName, args)
        } else {
            console.log('Not listener for ', eventName, args, this)
        }
    }

    _prefix (val = '') {
        return `${ this.namespace }${ this.separator }${ val }`
    }
}


let methods = {

    /**
     *
     * @param [idArr] {String|Number|Object|Array|Function}
     * @returns {Object}
     */
    get (idArr) {
        let cb;
        let isCb = typeof idArr === 'function';
        let isId = !Array.isArray(idArr) && (typeof idArr === 'string' || typeof idArr === 'number' || typeof idArr === 'object');
        if (isId) {
            if (typeof idArr === 'string' || typeof idArr === 'number') {
                idArr = [idArr];
            } else if (typeof idArr === 'object') {
                idArr = [idArr.id];
            }
        }

        if (isCb) {
            cb = idArr;
            idArr = undefined;
        }

        let namespace = this._prefix()
        let result = {}

        if (idArr) {
            idArr.forEach((id, index) => {
                result[id] = JSON.parse(localStorage.getItem(this._prefix(id)));
            });
        } else {
            for (let i in localStorage) {
                if (i.indexOf(namespace) === 0) {
                    let id = i.replace(namespace, '') || this.namespace;
                    let item = JSON.parse(localStorage[i]);
                    if (isCb) {
                        if (cb(item, i)) {
                            result[id] = item;
                        }
                    } else {
                        result[id] = item;
                    }
                }
            }
        }

        return result;
    },

    async get2 (id) {
        let result = await this.get(id);
        return result[id];
    },

    async has (record) {
        return await this.get(record);
    },

    /**
     * 修改一个记录对象
     * @param record {Object}
     * @returns {Promise<void>}
     */
    async set (record) {
        let id = record.id || Math.random().toFixed(8).replace('0.', '');
        let old = await this.get2(id) || {};
        Object.assign(old, record);
        id = this._prefix(id);
        localStorage.setItem(id, JSON.stringify(record));
    },

    /**
     * 更新一个记录对象
     * @param record {Object}
     */
    async update (record) {
        let id = record.id || Math.random().toFixed(8).replace('0.', '');
        id = this._prefix(id);
        localStorage.setItem(id, JSON.stringify(record));
    },

    remove (record) {
        let id = typeof record === 'object' ? record.id : record
        return localStorage.removeItem(this._prefix(id))
    },

    clear () {
        let namespace = this._prefix()
        for (let i in localStorage) {
            if (i.indexOf(namespace) === 0) {
                localStorage.removeItem(i)
            }
        }
    },

}

// 包装一些方法到promise, 方便以后改变存储方式
Object.keys(methods).forEach(method => {
    Db.prototype[method] = function (...args) {
        const that = this
        const fn = methods[method]
        return new Promise(function (resolve, reject) {
            let result = fn.apply(that, args)
            console.log(`Db ${ that.namespace } exec ${ method }; args => `, args);  // , 'return =>', result

            let arg = args[0]
            if (/remove/.test(method)) {
                setTimeout(() => {
                    that.emit('remove', arg, result);
                }, 40);
            } else if (/set/.test(method)) {
                setTimeout(() => {
                    that.emit('change', arg, result);
                }, 40);
            } else if (/clear/.test(method)) {
                setTimeout(() => {
                    that.emit('clear', arg, result);
                }, 40);
            }

            resolve(result);
        })
    }
})


export default function getDb (namespace) {
    return new Db(namespace)
}

export { Db }
