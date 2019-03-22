(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-node"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/views/node.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./components/views/node.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _listToolBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../listToolBar */ "./components/listToolBar.vue");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list */ "./components/list.vue");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins */ "./mixins/index.js");
/* harmony import */ var _libs_chrome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/chrome */ "./libs/chrome/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "../node_modules/vuex/dist/vuex.esm.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'node',
  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]],
  components: {
    listToolBar: _listToolBar__WEBPACK_IMPORTED_MODULE_0__["default"],
    list: _list__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      sortOptions: [{
        text: '选择排序方式',
        value: 'index'
      }, {
        text: '使用频率, 默认',
        value: 'hot'
      }, {
        text: 'title',
        value: 'title'
      }, {
        text: 'url',
        value: 'url'
      }, {
        text: '文件夹优先',
        value: 'children'
      }, {
        text: '添加时间',
        value: 'dateAdded'
      }, {
        text: '实际顺序, 可拖动排序',
        value: 'index'
      }],
      sortBy: '',
      // 排序方式
      paths: [],
      // 书签文件夹面包屑
      bookmarkArray: [],
      editing: false,
      goalBookmark: null
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapState"])({
    reverse: function reverse(state) {
      return state.ui.list.reverse;
    }
  }), {
    count: function count() {
      return this.bookmarkArray.length;
    }
  }),
  created: function created() {
    this.getData();
  },
  methods: {
    getData: function () {
      var _getData = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var id;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = this.$route.params.id;
                _context.next = 3;
                return this.getBookmarksForNode(id);

              case 3:
                this.bookmarkArray = _context.sent;
                this.reverse && this.bookmarkArray.reverse();
                _context.next = 7;
                return this.getPaths(id);

              case 7:
                this.paths = _context.sent;

              case 8:
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
    getBookmarksForNode: function () {
      var _getBookmarksForNode = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(id) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _libs_chrome__WEBPACK_IMPORTED_MODULE_3__["bookmarks"].getChildren(id).then(function (data) {
                  return data;
                });

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getBookmarksForNode(_x) {
        return _getBookmarksForNode.apply(this, arguments);
      }

      return getBookmarksForNode;
    }(),
    getPaths: function () {
      var _getPaths = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(id) {
        var paths, bookmarkArray, node;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                paths = [];

              case 1:
                _context3.next = 3;
                return _libs_chrome__WEBPACK_IMPORTED_MODULE_3__["bookmarks"].get(id).then(function (data) {
                  return data;
                });

              case 3:
                bookmarkArray = _context3.sent;
                node = bookmarkArray[0];
                paths.unshift(node);
                id = node.parentId;

              case 7:
                if (id) {
                  _context3.next = 1;
                  break;
                }

              case 8:
                return _context3.abrupt("return", paths);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getPaths(_x2) {
        return _getPaths.apply(this, arguments);
      }

      return getPaths;
    }(),
    onSortByChange: function onSortByChange(val) {
      this.sortBy = val;
    },
    onContextmenu: function onContextmenu(menu, bookmark) {
      console.log('onContextmenu =>', menu, bookmark);
      this[menu] && this[menu](bookmark);
    },
    createSubFolder: function createSubFolder(bookmark) {
      this.createSubFolder(bookmark);
    },
    edit: function edit(bookmark) {
      this.editBookmark(bookmark);
    },
    remove: function remove(bookmark) {
      _libs_chrome__WEBPACK_IMPORTED_MODULE_3__["bookmarks"].remove(bookmark);
    }
  },
  watch: {
    '$route': function $route(to, from) {
      console.log('watch $route', to, from);
      this.getData();
    },
    '$root.event': function $rootEvent(newValue) {
      this.getData();
    },
    'sortBy': function sortBy(newVal) {
      console.log('sortBy => ', newVal);
      this.$sortBookmarksBy(this.bookmarkArray, newVal);
    }
  }
});

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/views/node.vue?vue&type=template&id=ef37d204&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./components/views/node.vue?vue&type=template&id=ef37d204&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("list-tool-bar", {
        attrs: {
          paths: _vm.paths,
          count: _vm.count,
          sortOptions: _vm.sortOptions
        },
        on: { sortByChange: _vm.onSortByChange }
      }),
      _vm._v(" "),
      _c("list", {
        attrs: { bookmarkArray: _vm.bookmarkArray },
        on: { contextmenu: _vm.onContextmenu }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./components/views/node.vue":
/*!***********************************!*\
  !*** ./components/views/node.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_vue_vue_type_template_id_ef37d204_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.vue?vue&type=template&id=ef37d204&scoped=true& */ "./components/views/node.vue?vue&type=template&id=ef37d204&scoped=true&");
/* harmony import */ var _node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node.vue?vue&type=script&lang=js& */ "./components/views/node.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _node_vue_vue_type_template_id_ef37d204_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _node_vue_vue_type_template_id_ef37d204_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ef37d204",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ../node_modules/vue-hot-reload-api/dist/index.js */ "../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "../node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('ef37d204', component.options)
    } else {
      api.reload('ef37d204', component.options)
    }
    module.hot.accept(/*! ./node.vue?vue&type=template&id=ef37d204&scoped=true& */ "./components/views/node.vue?vue&type=template&id=ef37d204&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_vue_vue_type_template_id_ef37d204_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.vue?vue&type=template&id=ef37d204&scoped=true& */ "./components/views/node.vue?vue&type=template&id=ef37d204&scoped=true&");
(function () {
      api.rerender('ef37d204', {
        render: _node_vue_vue_type_template_id_ef37d204_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _node_vue_vue_type_template_id_ef37d204_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "components/views/node.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/views/node.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./components/views/node.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./node.vue?vue&type=script&lang=js& */ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/views/node.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/views/node.vue?vue&type=template&id=ef37d204&scoped=true&":
/*!******************************************************************************!*\
  !*** ./components/views/node.vue?vue&type=template&id=ef37d204&scoped=true& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_template_id_ef37d204_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./node.vue?vue&type=template&id=ef37d204&scoped=true& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/views/node.vue?vue&type=template&id=ef37d204&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_template_id_ef37d204_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_template_id_ef37d204_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=view-node.js.map