/**
 *
 * Created by j on 2019-10-03.
 */

import { bookmarks } from './chrome'
import getDb from './db'

const jbmDb = getDb('jbm');
const jCacheDb = getDb('jCache');
const jSettingDb = getDb('jSetting')

export default {
    ...bookmarks,
    /**
     *  获取书签对象
     * @param idArr {Array|String|Number|Object}  单个书签id或者书签id数组或者书签对象
     * @returns {Promise<Array|Object>} resolve => 最终数据是书签数组或单个书签对象
     */
    async get (idArr) {
        let isId = !Array.isArray(idArr) && (typeof idArr === 'string' || typeof idArr === 'number' || typeof idArr === 'object');
        if (isId) {
            if (typeof idArr === 'string' || typeof idArr === 'number') {
                idArr = [idArr];
            } else if (typeof idArr === 'object') {
                idArr = [idArr.id];
            }
        }

        let bookmarkArr = await bookmarks.get(idArr); // chrome.bookmarks.get() 返回的书签对象
        if (!bookmarkArr) {
            return console.log('not result =>', idArr, bookmarkArr);
        }

        let bookmarkMap = await jbmDb.get(idArr);
        bookmarkArr = await this._merge(bookmarkArr, bookmarkMap);

        return isId ? bookmarkArr[0] : bookmarkArr;
    },
    // 合并关联的书签数据
    async _merge (bookmarkArr, bookmarkMap) {
        let levels = await this.getSetting('levels');
        bookmarkArr.forEach((bookmark) => {
            let id = bookmark.id;
            Object.assign(bookmark, bookmarkMap[id] || {});
            if (bookmark.level) {
                bookmark.color = levels[bookmark.level - 1].color;
            }
        });
        return bookmarkArr;
    },
    async getRecent (count) {
        let bookmarkArr = await bookmarks.getRecent(count);
        let bookmarkMap = await jbmDb.get(bookmarkArr.map((v) => v.id));
        return await this._merge(bookmarkArr, bookmarkMap);
    },
    async set (bookmark, oldBookmark) {
        let {id, parentId, url, title, index, tag, level, visit} = bookmark;
        let isDistChange = id !== oldBookmark.id || url !== oldBookmark.url || title !== oldBookmark.title;
        /*|| parentId !== parentId2 || index * 1 !== index2;*/
        let isRelationChange = tag !== oldBookmark.tag || level !== oldBookmark.level || visit !== oldBookmark.visit;

        if (isDistChange) {
            console.log('--------isDistChange', bookmark, oldBookmark);
        }

        let relationBookmark = {id, tag, level, visit};
        let distBookmark = {url, title};
        if (parentId) {
            distBookmark.parentId = parentId;
        }
        if (typeof index !== 'undefined') {
            distBookmark.index = index * 1;
        }
        if (id) {
            distBookmark.id = id;
            let result = isDistChange ? await bookmarks.update(distBookmark) : bookmark;
            isRelationChange && jbmDb.set(relationBookmark);
            return Object.assign(result, relationBookmark);
        } else {
            let result = await bookmarks.create(distBookmark);
            relationBookmark.id = result.id;
            isRelationChange && jbmDb.set(relationBookmark);
            return Object.assign(result, relationBookmark);
        }
    },
    /**
     * 根据标签获取对应的书签
     * @param tag {String|Array} 标签字符或标签数组
     * @return {Promise}
     * @example bookMarkManager.getBookmarksByTag('js');
     */
    async getByTag (tag) {
        let bookmarkMap = await jbmDb.get((item) => {
            return (item.tag || '').search(tag) > -1;
        });
        let idArr = Object.keys(bookmarkMap);
        if (idArr.length === 0) return [];
        let bookmarkArr = await bookmarks.get(idArr);
        return this._merge(bookmarkArr, bookmarkMap);
    },
    async getByLevel (level = 1) {
        let bookmarkMap = await jbmDb.get((item) => {
            return item.level === level;
        });
        let idArr = Object.keys(bookmarkMap);
        if (idArr.length === 0) return [];
        let bookmarkArr = await bookmarks.get(idArr);
        return this._merge(bookmarkArr, bookmarkMap);
    },
    /**
     * 获取访问次数最多的书签
     * @param [count] {Number}
     */
    async getHot (count = 50) {
        let resultMap = await jbmDb.get((item) => {
            return item.visit > 5;
        });
        let idArr = Object.values(resultMap);
        idArr.sort((a, b) => b.visit - a.visit);
        idArr = idArr.map((v) => {
            return v.id;
        });
        idArr.splice(count);
        return await this.get(idArr) || [];
    },

    // 获取所有标签
    async getAllTag () {
        let resultMap = await jbmDb.get();
        let arr = Object.values(resultMap);
        let result = {};
        arr.forEach((item, index) => {
            let tag = item.tag;
            if (tag) {
                let tagArr = tag.split(/\s*,\s*/img);
                tagArr.forEach((v, i) => {
                    result[v] = result[v] || [];
                    result[v].push(item.id);
                })
            }
        });
        return result;
    },

    getSetting (key) {
        let data = {
            levels: [1, 2, 3, 4, 5, 6, 7].map((v) => {
                return {value: v, color: `rgba(${ 255 - v * 5 }, ${ 30 + v * 20 }, ${ 240 - v * 20 }, 1)`};
            }),
        };
        console.log(data.levels)
        return key ? data[key] : data;
    }
}
