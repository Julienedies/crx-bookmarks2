/*!
 * 
 * Created by j on 2019-01-12.
 */

import wrapApi from './util'

const wrapper = {}

wrapApi(chrome.storage, wrapper)

export default wrapper
