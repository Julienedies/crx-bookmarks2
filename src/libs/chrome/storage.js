/*!
 * 
 * Created by j on 2019-01-12.
 */

import wrapApi from './wrapApi'

const wrapper = wrapApi(chrome.storage, {name: 'storage'})

export default wrapper
