/**
 *
 * Created by j on 2019-10-03.
 */

import { bookmarks } from './chrome'
import getDb from './db'

const jbmDb = getDb('jbm');

export default {
    async get (id) {
        let bookmark = await bookmarks.get(id); // chrome.bookmarks.get() 返回的书签对象
        let extra = await jbmDb.get(id);  // 关联的书签数据对象，比如访问次数，标签，级别等
        Object.assign(bookmark, extra);
        return bookmark;
    },
    set (bookmark) {

    },
    // 获取所有标签
    getAllTag () {
        return new Promise((resolve, reject) => {

        });
    },
    /**
     * 根据标签获取对应的书签
     * @param tag {String|Array} 标签字符或标签数组
     * @return {Promise}
     * @example bookMarkManager.getBookmarksByTag('js');
     */
    getBookmarksByTag (tag) {
        return new Promise((resolve, reject) => {

        });
    },
    /**
     * 获取访问次数最多的书签
     * @param count {Number}
     */
    getHot (count) {

    },


}
