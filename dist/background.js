(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["background"],{

/***/ "./pages/app/background.js":
/*!*********************************!*\
  !*** ./pages/app/background.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_chrome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../libs/chrome */ "./libs/chrome/index.js");
/* harmony import */ var _libs_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/db */ "./libs/db.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*!
 * 
 * Created by j on 2019-01-11.
 */


var trashDb = Object(_libs_db__WEBPACK_IMPORTED_MODULE_1__["default"])('trash');
var visitDb = Object(_libs_db__WEBPACK_IMPORTED_MODULE_1__["default"])('visit');
var shortcutDb = Object(_libs_db__WEBPACK_IMPORTED_MODULE_1__["default"])('shortcut'); // 当一个书签被删除, 把它保存到db

_libs_chrome__WEBPACK_IMPORTED_MODULE_0__["bookmarks"].on('onRemoved', function (id, changeInfo, event) {
  var obj = _objectSpread({
    index: changeInfo.index,
    parentId: changeInfo.parentId
  }, changeInfo.node);

  console.log('保存到回收站', obj);
  trashDb.set(obj); // 一个书签被删除后, 需要删除其它相关数据

  visitDb.remove(id);
  shortcutDb.remove(id);
});

var f = function f(tab) {
  if (!tab.url) return;
  _libs_chrome__WEBPACK_IMPORTED_MODULE_0__["bookmarks"].search(tab.url).then(function (list) {
    list.forEach(function (bookmark) {
      if (bookmark.url === tab.url) {
        console.log('添加新访问记录 => ', bookmark);
        visitDb.get(bookmark.id).then(function (record) {
          record = record || {
            id: bookmark.id,
            count: 0
          };
          record.count += 1;
          visitDb.set(record);
        });
      }
    });
  });
};

_libs_chrome__WEBPACK_IMPORTED_MODULE_0__["tabs"].on(function () {//console.log(args)
}); // 记录浏览器访问记录, 统计最常使用的书签

/*tabs.on('onCreated', (tab, event)=> {
    f(tab)
})*/

_libs_chrome__WEBPACK_IMPORTED_MODULE_0__["tabs"].on('onUpdated', function (tabId, changeInfe, tab, event) {
  console.log(tab.status);
  tab.status === 'complete' && f(tab);
});
/*tabs.on('onReplaced', function (addedTabId, removedTabId, event) {
    tabs.get(addedTabId).then(tab => {
        f(tab)
    })
})*/

/***/ }),

/***/ 2:
/*!**************************************************************************************************************************************************************************************************!*\
  !*** multi ../node_modules/webpack-dev-server/client?http://localhost:9083 ../node_modules/webpack/hot/dev-server.js webpack-dev-server/client?http://localhost:9083/ ./pages/app/background.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/j/dev/crx-bookmarks2/node_modules/webpack-dev-server/client/index.js?http://localhost:9083 */"../node_modules/webpack-dev-server/client/index.js?http://localhost:9083");
__webpack_require__(/*! /Users/j/dev/crx-bookmarks2/node_modules/webpack/hot/dev-server.js */"../node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! webpack-dev-server/client?http://localhost:9083/ */"../node_modules/webpack-dev-server/client/index.js?http://localhost:9083/");
module.exports = __webpack_require__(/*! ./pages/app/background.js */"./pages/app/background.js");


/***/ })

},[[2,"runtime","vendors","common"]]]);
//# sourceMappingURL=background.js.map