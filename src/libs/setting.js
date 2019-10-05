/**
 *
 * Created by j on 2019-10-05.
 */

import getDb from './db'

const settingDb = getDb('jSet');

export default {

    on (ev, cb) {
        return settingDb.on(ev, cb);
    },

    off (ev, cb) {
        return settingDb.off(ev, cb);
    },

    async get (key) {
        let resultMap = await settingDb.get();
        //resultMap.levels = {id: 'levels', _data: [1, 2, 3, 4, 5, 6, 7]};

        console.log('setting.get =>', resultMap, key);
        if (key) {
            let data = resultMap[key] || {};
            return data._data;
        } else {
            return resultMap;
        }
    },


    set (key, value) {

        if (typeof key === 'object' && value === undefined) {
            value = key;
            key = value.id;
        }

        if (!value._data) {
            value = {id: key, _data: value}
        }

        settingDb.set(value);
    }
}
