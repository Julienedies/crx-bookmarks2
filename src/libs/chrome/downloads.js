/*!
 * 
 * Created by j on 2019-01-13.
 */

import wrapApi from './wrapApi'

const wrapper = wrapApi(chrome.downloads)

export default wrapper