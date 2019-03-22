(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["popup"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./pages/popup/App.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./pages/popup/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_views_shortcut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/views/shortcut */ "./components/views/shortcut.vue");
/* harmony import */ var _components_views_recent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/views/recent */ "./components/views/recent.vue");
/* harmony import */ var _components_views_hot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/views/hot */ "./components/views/hot.vue");
/* harmony import */ var _libs_chrome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/chrome */ "./libs/chrome/index.js");
/* harmony import */ var _libs_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../libs/db */ "./libs/db.js");
/* harmony import */ var _setBookmark__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setBookmark */ "./pages/popup/setBookmark.vue");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






var visitDb = Object(_libs_db__WEBPACK_IMPORTED_MODULE_4__["default"])('visit');
var shortcutDb = Object(_libs_db__WEBPACK_IMPORTED_MODULE_4__["default"])('shortcut');
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'App',
  components: {
    setBookmark: _setBookmark__WEBPACK_IMPORTED_MODULE_5__["default"],
    shortcut: _components_views_shortcut__WEBPACK_IMPORTED_MODULE_0__["default"],
    recent: _components_views_recent__WEBPACK_IMPORTED_MODULE_1__["default"],
    hot: _components_views_hot__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      c: 'shortcut',
      isSetBookmark: false,
      isSelectFolder: false,
      bookmark: {}
    };
  },
  created: function created() {
    this.getBookmarkByTab();
  },
  mounted: function mounted() {
    this.getData();
  },
  computed: {},
  methods: {
    getData: function () {
      var _getData = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _getData.apply(this, arguments);
      }

      return getData;
    }(),
    open: function open() {
      _libs_chrome__WEBPACK_IMPORTED_MODULE_3__["tabs"].create({
        url: './dist/app.html',
        selected: true
      });
    },
    getBookmarkByTab: function () {
      var _getBookmarkByTab = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var _this = this;

        var tab, bookmarkArray;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _libs_chrome__WEBPACK_IMPORTED_MODULE_3__["tabs"].getSelected();

              case 2:
                tab = _context2.sent;
                console.log('#tab is', tab);
                _context2.next = 6;
                return _libs_chrome__WEBPACK_IMPORTED_MODULE_3__["bookmarks"].search(tab.url);

              case 6:
                bookmarkArray = _context2.sent;
                console.log('#search', bookmarkArray);
                bookmarkArray = bookmarkArray || [];
                bookmarkArray = bookmarkArray.filter(function (item) {
                  return item.url === tab.url;
                });

                if (bookmarkArray && bookmarkArray.length) {
                  this.bookmark = bookmarkArray[0];
                  _libs_chrome__WEBPACK_IMPORTED_MODULE_3__["bookmarks"].get(this.bookmark.parentId).then(function (data) {
                    _this.$set(_this.bookmark, 'folderName', data[0].title);
                  });
                } else {
                  this.bookmark = {
                    title: tab.title,
                    url: tab.url
                  };
                }

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getBookmarkByTab() {
        return _getBookmarkByTab.apply(this, arguments);
      }

      return getBookmarkByTab;
    }(),
    addShortcut: function addShortcut() {
      var _this2 = this;

      shortcutDb.set(this.bookmark).then(function (data) {
        _this2.$msg('添加完成!');
      });
    }
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./pages/popup/setBookmark.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./pages/popup/setBookmark.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_views_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/views/tree */ "./components/views/tree.vue");
/* harmony import */ var _libs_chrome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/chrome */ "./libs/chrome/index.js");
/* harmony import */ var _libs_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/db */ "./libs/db.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var shortcutDb = new _libs_db__WEBPACK_IMPORTED_MODULE_2__["Db"]('shortcut');
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'setBookmark',
  components: {
    TreeMap: _components_views_tree__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    bookmark: Object
  },
  data: function data() {
    return {
      c: '',
      c_bookmark: {
        id: null,
        parentId: null,
        title: '',
        url: '',
        folderName: ''
      },
      isSelectFolder: false
    };
  },
  methods: {
    add: function add() {
      var _this = this;

      _libs_chrome__WEBPACK_IMPORTED_MODULE_1__["bookmarks"].add(this.c_bookmark).then(function (data) {
        console.log('added', data, _this);

        _this.setBookmark(data);

        _this.$msg('已经添加!');
      });
    },
    update: function update() {
      var _this2 = this;

      _libs_chrome__WEBPACK_IMPORTED_MODULE_1__["bookmarks"].update(this.c_bookmark).then(function (data) {
        console.log('update', data);

        _this2.setBookmark(data);

        _this2.$msg('更新完成!');
      });
    },
    remove: function remove() {
      var _this3 = this;

      _libs_chrome__WEBPACK_IMPORTED_MODULE_1__["bookmarks"].remove(this.c_bookmark).then(function (data) {
        _this3.c_bookmark.id = null;

        _this3.$msg('已经删除!');
      });
    },
    selectFolder: function selectFolder() {
      this.isSelectFolder = true;
      this.c = 'TreeMap';
    },
    addShortcut: function addShortcut() {
      var _this4 = this;

      shortcutDb.set(this.c_bookmark).then(function (data) {
        _this4.$msg('添加完成!');
      });
    },
    onSelectFolderChange: function onSelectFolderChange(folder, path) {
      console.info('selected folder:', folder);

      if (_typeof(folder) === 'object') {
        this.c_bookmark.parentId = folder.id;
        this.c_bookmark.folderName = "".concat(path.join(' / '));
        this.isSelectFolder = false;
      } else {
        delete this.c_bookmark.parentId;
        this.c_bookmark.folderName = '';
      }
    },
    setBookmark: function setBookmark(newVal) {
      this.c_bookmark = Object.assign({}, this.c_bookmark, newVal);
    }
  },
  watch: {
    'bookmark': function bookmark(newVal, oldVal) {
      this.setBookmark(newVal);
    }
  }
});

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/sass-loader/lib/loader.js?!./pages/popup/style.scss":
/*!*************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--5-1!../node_modules/sass-loader/lib/loader.js??ref--5-2!./pages/popup/style.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  min-width: 800px;\n  min-height: 500px;\n  overflow-x: hidden;\n  overflow-y: scroll; }\n", ""]);



/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js?!../node_modules/vue-loader/lib/index.js?!./pages/popup/App.vue?vue&type=style&index=0&id=3697aef5&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--5-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js??ref--5-2!../node_modules/vue-loader/lib??vue-loader-options!./pages/popup/App.vue?vue&type=style&index=0&id=3697aef5&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "[data-v-3697aef5] .layer {\n  position: fixed;\n  z-index: 100;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding: 1em;\n  background: #fff;\n  transition: all 0.5s;\n  opacity: 0;\n}\n[data-v-3697aef5] .layer.show {\n    top: 0;\n    opacity: 1;\n}\n", ""]);



/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js?!../node_modules/vue-loader/lib/index.js?!./pages/popup/setBookmark.vue?vue&type=style&index=0&id=0108a12c&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--5-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js??ref--5-2!../node_modules/vue-loader/lib??vue-loader-options!./pages/popup/setBookmark.vue?vue&type=style&index=0&id=0108a12c&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".control button[data-v-0108a12c] {\n  margin-right: 3rem;\n}\n", ""]);



/***/ }),

/***/ "../node_modules/style-loader/index.js?!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js?!../node_modules/vue-loader/lib/index.js?!./pages/popup/App.vue?vue&type=style&index=0&id=3697aef5&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/style-loader??ref--5-0!../node_modules/css-loader/dist/cjs.js??ref--5-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js??ref--5-2!../node_modules/vue-loader/lib??vue-loader-options!./pages/popup/App.vue?vue&type=style&index=0&id=3697aef5&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=3697aef5&lang=scss&scoped=true& */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js?!../node_modules/vue-loader/lib/index.js?!./pages/popup/App.vue?vue&type=style&index=0&id=3697aef5&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=3697aef5&lang=scss&scoped=true& */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js?!../node_modules/vue-loader/lib/index.js?!./pages/popup/App.vue?vue&type=style&index=0&id=3697aef5&lang=scss&scoped=true&", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=3697aef5&lang=scss&scoped=true& */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js?!../node_modules/vue-loader/lib/index.js?!./pages/popup/App.vue?vue&type=style&index=0&id=3697aef5&lang=scss&scoped=true&");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../node_modules/style-loader/index.js?!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js?!../node_modules/vue-loader/lib/index.js?!./pages/popup/setBookmark.vue?vue&type=style&index=0&id=0108a12c&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/style-loader??ref--5-0!../node_modules/css-loader/dist/cjs.js??ref--5-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js??ref--5-2!../node_modules/vue-loader/lib??vue-loader-options!./pages/popup/setBookmark.vue?vue&type=style&index=0&id=0108a12c&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./setBookmark.vue?vue&type=style&index=0&id=0108a12c&lang=scss&scoped=true& */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js?!../node_modules/vue-loader/lib/index.js?!./pages/popup/setBookmark.vue?vue&type=style&index=0&id=0108a12c&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./setBookmark.vue?vue&type=style&index=0&id=0108a12c&lang=scss&scoped=true& */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js?!../node_modules/vue-loader/lib/index.js?!./pages/popup/setBookmark.vue?vue&type=style&index=0&id=0108a12c&lang=scss&scoped=true&", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./setBookmark.vue?vue&type=style&index=0&id=0108a12c&lang=scss&scoped=true& */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js?!../node_modules/vue-loader/lib/index.js?!./pages/popup/setBookmark.vue?vue&type=style&index=0&id=0108a12c&lang=scss&scoped=true&");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./pages/popup/App.vue?vue&type=template&id=3697aef5&scoped=true&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./pages/popup/App.vue?vue&type=template&id=3697aef5&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "box" }, [
    _c("div", { staticClass: "level" }, [
      _c("div", { staticClass: "level-left buttons has-addons" }, [
        _c(
          "button",
          {
            staticClass: "button",
            class: { "is-info": _vm.c === "shortcut" },
            on: {
              click: function($event) {
                _vm.c = "shortcut"
              }
            }
          },
          [_vm._v("快捷")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "button",
            class: { "is-info": _vm.c === "recent" },
            on: {
              click: function($event) {
                _vm.c = "recent"
              }
            }
          },
          [_vm._v("最近")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "button",
            class: { "is-info": _vm.c === "hot" },
            on: {
              click: function($event) {
                _vm.c = "hot"
              }
            }
          },
          [_vm._v("常用")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "level-right buttons has-addons" }, [
        _vm.bookmark.id
          ? _c(
              "button",
              {
                staticClass: "button",
                on: {
                  click: function($event) {
                    _vm.isSetBookmark = 1
                  }
                }
              },
              [_vm._v("修改书签")]
            )
          : _c(
              "button",
              {
                staticClass: "button",
                on: {
                  click: function($event) {
                    _vm.isSetBookmark = 1
                  }
                }
              },
              [_vm._v("添加书签")]
            ),
        _vm._v(" "),
        _c(
          "button",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.bookmark.id,
                expression: "bookmark.id"
              }
            ],
            staticClass: "button",
            on: { click: _vm.addShortcut }
          },
          [_vm._v("添加快捷方式")]
        ),
        _vm._v(" "),
        _c("button", { staticClass: "button", on: { click: _vm.open } }, [
          _vm._v("打开书签管理器")
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", [_c(_vm.c, { tag: "component" })], 1),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "layer", class: { show: _vm.isSetBookmark } },
      [
        _c("setBookmark", {
          attrs: { bookmark: _vm.bookmark },
          on: {
            close: function($event) {
              _vm.isSetBookmark = false
            }
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./pages/popup/setBookmark.vue?vue&type=template&id=0108a12c&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./pages/popup/setBookmark.vue?vue&type=template&id=0108a12c&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "field is-horizontal" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "field-body" }, [
        _c("div", { staticClass: "field" }, [
          _c("div", { staticClass: "control" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.c_bookmark.title,
                  expression: "c_bookmark.title"
                }
              ],
              staticClass: "input",
              attrs: { type: "text" },
              domProps: { value: _vm.c_bookmark.title },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.c_bookmark, "title", $event.target.value)
                }
              }
            })
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "field is-horizontal" }, [
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "field-body" }, [
        _c("div", { staticClass: "field" }, [
          _c("div", { staticClass: "control" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.c_bookmark.url,
                  expression: "c_bookmark.url"
                }
              ],
              staticClass: "input",
              attrs: { type: "text" },
              domProps: { value: _vm.c_bookmark.url },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.c_bookmark, "url", $event.target.value)
                }
              }
            })
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "field is-horizontal" }, [
      _vm._m(2),
      _vm._v(" "),
      _c("div", { staticClass: "field-body" }, [
        _c("div", { staticClass: "field has-addons" }, [
          _c("div", { staticClass: "control is-expanded" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.c_bookmark.folderName,
                  expression: "c_bookmark.folderName"
                }
              ],
              staticClass: "input",
              attrs: { type: "text", readonly: "" },
              domProps: { value: _vm.c_bookmark.folderName },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.c_bookmark, "folderName", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "control" }, [
            _c(
              "a",
              {
                staticClass: "button is-info",
                on: { click: _vm.selectFolder }
              },
              [
                _vm._v(
                  "\n                        选择文件夹\n                    "
                )
              ]
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "field is-horizontal" }, [
      _c("div", { staticClass: "field-label" }),
      _vm._v(" "),
      _c("div", { staticClass: "field-body" }, [
        _c("div", { staticClass: "field" }, [
          _c("div", { staticClass: "control" }, [
            _vm.c_bookmark.id
              ? _c(
                  "button",
                  {
                    staticClass: "button is-primary",
                    on: { click: _vm.update }
                  },
                  [
                    _vm._v(
                      "\n                        更新\n                    "
                    )
                  ]
                )
              : _c(
                  "button",
                  { staticClass: "button is-primary", on: { click: _vm.add } },
                  [
                    _vm._v(
                      "\n                        添加\n                    "
                    )
                  ]
                ),
            _vm._v(" "),
            _c(
              "button",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.c_bookmark.id,
                    expression: "c_bookmark.id"
                  }
                ],
                staticClass: "button is-primary",
                on: { click: _vm.remove }
              },
              [_vm._v("\n                        删除\n                    ")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.c_bookmark.id,
                    expression: "c_bookmark.id"
                  }
                ],
                staticClass: "button",
                on: { click: _vm.addShortcut }
              },
              [_vm._v("添加快捷方式")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "button",
                on: {
                  click: function($event) {
                    return _vm.$emit("close")
                  }
                }
              },
              [_vm._v("返回")]
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "layer", class: { show: _vm.isSelectFolder } }, [
      _c(
        "div",
        {
          staticStyle: {
            display: "flex",
            "flex-flow": "column",
            width: "100%",
            height: "100%"
          }
        },
        [
          _c("div", { staticClass: "box" }, [
            _c(
              "button",
              {
                staticClass: "button",
                on: {
                  click: function($event) {
                    _vm.isSelectFolder = false
                  }
                }
              },
              [_vm._v("返回")]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticStyle: { flex: "1" } },
            [
              _c(_vm.c, {
                tag: "component",
                on: { selectFolderChange: _vm.onSelectFolderChange }
              })
            ],
            1
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "field-label is-normal" }, [
      _c("label", { staticClass: "label" }, [_vm._v("title")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "field-label is-normal" }, [
      _c("label", { staticClass: "label" }, [_vm._v("url")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "field-label is-normal" }, [
      _c("label", { staticClass: "label" }, [_vm._v("文件夹")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./pages/popup/App.vue":
/*!*****************************!*\
  !*** ./pages/popup/App.vue ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_3697aef5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=3697aef5&scoped=true& */ "./pages/popup/App.vue?vue&type=template&id=3697aef5&scoped=true&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./pages/popup/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_3697aef5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=3697aef5&lang=scss&scoped=true& */ "./pages/popup/App.vue?vue&type=style&index=0&id=3697aef5&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_3697aef5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_3697aef5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3697aef5",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ../node_modules/vue-hot-reload-api/dist/index.js */ "../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "../node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('3697aef5', component.options)
    } else {
      api.reload('3697aef5', component.options)
    }
    module.hot.accept(/*! ./App.vue?vue&type=template&id=3697aef5&scoped=true& */ "./pages/popup/App.vue?vue&type=template&id=3697aef5&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _App_vue_vue_type_template_id_3697aef5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=3697aef5&scoped=true& */ "./pages/popup/App.vue?vue&type=template&id=3697aef5&scoped=true&");
(function () {
      api.rerender('3697aef5', {
        render: _App_vue_vue_type_template_id_3697aef5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _App_vue_vue_type_template_id_3697aef5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "pages/popup/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./pages/popup/App.vue?vue&type=script&lang=js&":
/*!******************************************************!*\
  !*** ./pages/popup/App.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./pages/popup/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./pages/popup/App.vue?vue&type=style&index=0&id=3697aef5&lang=scss&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./pages/popup/App.vue?vue&type=style&index=0&id=3697aef5&lang=scss&scoped=true& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_ref_5_0_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3697aef5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader??ref--5-0!../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=3697aef5&lang=scss&scoped=true& */ "../node_modules/style-loader/index.js?!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js?!../node_modules/vue-loader/lib/index.js?!./pages/popup/App.vue?vue&type=style&index=0&id=3697aef5&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_ref_5_0_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3697aef5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_ref_5_0_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3697aef5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_ref_5_0_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3697aef5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_ref_5_0_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3697aef5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_ref_5_0_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3697aef5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./pages/popup/App.vue?vue&type=template&id=3697aef5&scoped=true&":
/*!************************************************************************!*\
  !*** ./pages/popup/App.vue?vue&type=template&id=3697aef5&scoped=true& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3697aef5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=3697aef5&scoped=true& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./pages/popup/App.vue?vue&type=template&id=3697aef5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3697aef5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3697aef5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./pages/popup/main.js":
/*!*****************************!*\
  !*** ./pages/popup/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ "../node_modules/babel-polyfill/lib/index.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ "../node_modules/@fortawesome/fontawesome-free/css/all.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hint_css_hint_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hint.css/hint.css */ "../node_modules/hint.css/hint.css");
/* harmony import */ var hint_css_hint_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hint_css_hint_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vendor_bulma_bulma_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vendor/bulma/bulma.sass */ "./vendor/bulma/bulma.sass");
/* harmony import */ var _vendor_bulma_bulma_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vendor_bulma_bulma_sass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_common_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../css/common.scss */ "./css/common.scss");
/* harmony import */ var _css_common_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_common_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./pages/popup/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ "../node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _vuex_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../vuex/index */ "./vuex/index.js");
/* harmony import */ var vueex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vueex */ "./vendor/vueex/index.js");
/* harmony import */ var _app_install__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/install */ "./pages/app/install.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./App */ "./pages/popup/App.vue");
/*!
 * popup html entry
 * Created by j on 2019-01-10.
 */

/*setTimeout(() => {
    if(window.innerWidth < 1000)
    chrome.tabs.create({ url: './dist/app.html', selected: true })
}, 100)*/









vue__WEBPACK_IMPORTED_MODULE_6__["default"].use(vueex__WEBPACK_IMPORTED_MODULE_8__["default"]);

Object(_app_install__WEBPACK_IMPORTED_MODULE_9__["default"])(vue__WEBPACK_IMPORTED_MODULE_6__["default"]);

new vue__WEBPACK_IMPORTED_MODULE_6__["default"]({
  el: '#app',
  store: _vuex_index__WEBPACK_IMPORTED_MODULE_7__["default"],
  render: function render(h) {
    return h(_App__WEBPACK_IMPORTED_MODULE_10__["default"]);
  }
});

/***/ }),

/***/ "./pages/popup/setBookmark.vue":
/*!*************************************!*\
  !*** ./pages/popup/setBookmark.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setBookmark_vue_vue_type_template_id_0108a12c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setBookmark.vue?vue&type=template&id=0108a12c&scoped=true& */ "./pages/popup/setBookmark.vue?vue&type=template&id=0108a12c&scoped=true&");
/* harmony import */ var _setBookmark_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setBookmark.vue?vue&type=script&lang=js& */ "./pages/popup/setBookmark.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _setBookmark_vue_vue_type_style_index_0_id_0108a12c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setBookmark.vue?vue&type=style&index=0&id=0108a12c&lang=scss&scoped=true& */ "./pages/popup/setBookmark.vue?vue&type=style&index=0&id=0108a12c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _setBookmark_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _setBookmark_vue_vue_type_template_id_0108a12c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _setBookmark_vue_vue_type_template_id_0108a12c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0108a12c",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ../node_modules/vue-hot-reload-api/dist/index.js */ "../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "../node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('0108a12c', component.options)
    } else {
      api.reload('0108a12c', component.options)
    }
    module.hot.accept(/*! ./setBookmark.vue?vue&type=template&id=0108a12c&scoped=true& */ "./pages/popup/setBookmark.vue?vue&type=template&id=0108a12c&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _setBookmark_vue_vue_type_template_id_0108a12c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setBookmark.vue?vue&type=template&id=0108a12c&scoped=true& */ "./pages/popup/setBookmark.vue?vue&type=template&id=0108a12c&scoped=true&");
(function () {
      api.rerender('0108a12c', {
        render: _setBookmark_vue_vue_type_template_id_0108a12c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _setBookmark_vue_vue_type_template_id_0108a12c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "pages/popup/setBookmark.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./pages/popup/setBookmark.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./pages/popup/setBookmark.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_setBookmark_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./setBookmark.vue?vue&type=script&lang=js& */ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./pages/popup/setBookmark.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_setBookmark_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./pages/popup/setBookmark.vue?vue&type=style&index=0&id=0108a12c&lang=scss&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./pages/popup/setBookmark.vue?vue&type=style&index=0&id=0108a12c&lang=scss&scoped=true& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_ref_5_0_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_setBookmark_vue_vue_type_style_index_0_id_0108a12c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader??ref--5-0!../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./setBookmark.vue?vue&type=style&index=0&id=0108a12c&lang=scss&scoped=true& */ "../node_modules/style-loader/index.js?!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js?!../node_modules/vue-loader/lib/index.js?!./pages/popup/setBookmark.vue?vue&type=style&index=0&id=0108a12c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_ref_5_0_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_setBookmark_vue_vue_type_style_index_0_id_0108a12c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_ref_5_0_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_setBookmark_vue_vue_type_style_index_0_id_0108a12c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_ref_5_0_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_setBookmark_vue_vue_type_style_index_0_id_0108a12c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_ref_5_0_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_setBookmark_vue_vue_type_style_index_0_id_0108a12c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_ref_5_0_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_setBookmark_vue_vue_type_style_index_0_id_0108a12c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./pages/popup/setBookmark.vue?vue&type=template&id=0108a12c&scoped=true&":
/*!********************************************************************************!*\
  !*** ./pages/popup/setBookmark.vue?vue&type=template&id=0108a12c&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_setBookmark_vue_vue_type_template_id_0108a12c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./setBookmark.vue?vue&type=template&id=0108a12c&scoped=true& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./pages/popup/setBookmark.vue?vue&type=template&id=0108a12c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_setBookmark_vue_vue_type_template_id_0108a12c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_setBookmark_vue_vue_type_template_id_0108a12c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./pages/popup/style.scss":
/*!********************************!*\
  !*** ./pages/popup/style.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/sass-loader/lib/loader.js??ref--5-2!./style.scss */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/sass-loader/lib/loader.js?!./pages/popup/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/sass-loader/lib/loader.js??ref--5-2!./style.scss */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/sass-loader/lib/loader.js?!./pages/popup/style.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/sass-loader/lib/loader.js??ref--5-2!./style.scss */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/sass-loader/lib/loader.js?!./pages/popup/style.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi ../node_modules/webpack-dev-server/client?http://localhost:9083 ../node_modules/webpack/hot/dev-server.js webpack-dev-server/client?http://localhost:9083/ ./pages/popup/main.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/j/dev/crx-bookmarks2/node_modules/webpack-dev-server/client/index.js?http://localhost:9083 */"../node_modules/webpack-dev-server/client/index.js?http://localhost:9083");
__webpack_require__(/*! /Users/j/dev/crx-bookmarks2/node_modules/webpack/hot/dev-server.js */"../node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! webpack-dev-server/client?http://localhost:9083/ */"../node_modules/webpack-dev-server/client/index.js?http://localhost:9083/");
module.exports = __webpack_require__(/*! ./pages/popup/main.js */"./pages/popup/main.js");


/***/ })

},[[1,"runtime","vendors","common"]]]);
//# sourceMappingURL=popup.js.map