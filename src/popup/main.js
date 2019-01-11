/*!
 * 
 * Created by j on 2019-01-10.
 */

setTimeout(() => {
    chrome.tabs.create({ url: './dist/app.html', selected: true })
}, 100)
