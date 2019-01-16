/*!
 * filter
 * Created by j on 2019-01-05.
 */

/**
 * 显示网站icon
 * @param input {String} 书签的url
 * @returns {String}  icon src
 */
export function getFavicon(input) {
    return 'chrome://favicon/' + input;
}

