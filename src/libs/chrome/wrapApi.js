/*!
 * 一个工具函数, 用于生成chrome api相同接口的包装对象
 * 但是包装对象的接口支持promise,
 * 同时提供一个on方法, 添加事件监听器的简洁写法
 * example:
 * // 原生接口调用
 * chrome.tabs.getCurrent(tab => tab)
 * // 包装对象调用
 * const tabs = wrapApi(chrome.tabs)
 * tabs.getCurrent().then(tab => tab)
 * tabs.on('onCreated', tab => tab)
 *
 * Created by j on 2019-01-12.
 */

/**
 * @todo 为chrome api生成一个包装对象
 * @param api {Object} 要包装的chrome api
 * @param wrapper {Object} 包装后的对象
 * @return {Object} wrapper
 */
export default function wrapApi (api, wrapper = {}) {

    let events = wrapper.events = wrapper.events || []
    wrapper.api = api

    for (let [prop, value] of Object.entries(api)) {

        // wrap methods of chrome api as promise
        if (typeof value === 'function') {

            wrapper[prop] = ((prop => {

                return function (...args) {

                    return new Promise((resolve, reject) => {
                        let call = (data) => {
                            console.log(`chrome API Invoking => ${wrapper.name}.${prop}`, `args => ${args[0]}`,  ' return => ', data)
                            resolve(data)
                        }
                        args.push(call)
                        api[prop].apply(api, args)
                    })
                }

            }))(prop)
        }
        // 提出事件类型
        else if (typeof value === 'object' && prop.startsWith('on')) {
            events.push(prop)
        }

    }

    /**
     * @todo wrap addListener for chrome api
     * @param event  {String|Array}
     * @param callback
     */
    wrapper.on = function (event, callback) {
        if (!callback) {
            callback = event
            event = undefined
        }

        let events = this.events
        let api = this.api

        event = event || events  // 如果没有提供事件名, 则默认监听所有事件
        event = Array.isArray(event) ? event : [event]

        let f = event.length > 1 ? 'unshift' : 'push' // 如果一次监听多个事件, 则把事件名附近到回调函数参数头部, 否则添加到末尾

        event.forEach(eventName => {
            console.log(`addListener for ${wrapper.name}.`, eventName)
            events.includes(eventName) && api[eventName].addListener(function (...args) {
                console.log(eventName, args)
                args[f](eventName)
                callback.apply(null, args)
            })
        })

    }

    return wrapper

}


