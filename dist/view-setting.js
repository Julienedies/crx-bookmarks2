(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-setting"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/views/setting.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./components/views/setting.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_chrome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../libs/chrome */ "./libs/chrome/index.js");
/* harmony import */ var _libs_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/db */ "./libs/db.js");
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


var visitDb = Object(_libs_db__WEBPACK_IMPORTED_MODULE_1__["default"])('visit');
var shortcutDb = Object(_libs_db__WEBPACK_IMPORTED_MODULE_1__["default"])('shortcut');
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'setting',
  data: function data() {
    return {
      msg: ''
    };
  },
  methods: {
    // 用于处理自定义数据和书签数据不匹配的情况
    clean: function () {
      var _clean = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var that, cb, _cb;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _cb = function _ref2() {
                  _cb = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee(db, i) {
                    var dbo, idArray, _i, id, b;

                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return db.get();

                          case 2:
                            dbo = _context.sent;
                            idArray = Object.keys(dbo);
                            _i = 0;

                          case 5:
                            if (!(_i < idArray.length)) {
                              _context.next = 14;
                              break;
                            }

                            id = idArray[_i];
                            _context.next = 9;
                            return _libs_chrome__WEBPACK_IMPORTED_MODULE_0__["bookmarks"].get(id);

                          case 9:
                            b = _context.sent;

                            if (!b) {
                              console.log(id, dbo[id]);
                              db.remove(id);
                              that.msg += " ".concat(id, "; ");
                            }

                          case 11:
                            _i++;
                            _context.next = 5;
                            break;

                          case 14:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));
                  return _cb.apply(this, arguments);
                };

                cb = function _ref(_x, _x2) {
                  return _cb.apply(this, arguments);
                };

                that = this;
                that.msg = '已清理无效ID:';
                [visitDb, shortcutDb].forEach(cb);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function clean() {
        return _clean.apply(this, arguments);
      }

      return clean;
    }(),
    download: function download() {
      var that = this;
      var data = _libs_db__WEBPACK_IMPORTED_MODULE_1__["Db"].getAll();
      var str = JSON.stringify(data);
      var url = window.URL.createObjectURL(new Blob([str], {
        type: 'text/plain;charset=utf-8'
      }));
      _libs_chrome__WEBPACK_IMPORTED_MODULE_0__["downloads"].download({
        filename: 'bookmarks2-bak.json',
        url: url
      }).then(function (data) {
        console.log(data);
        that.msg = '备份已下载!';
      });
    },
    upload: function upload() {
      var that = this;
      var dom = this.$refs.file;
      var file = dom.files[0];
      if (!file) return;
      console.log(file);
      var reader = new FileReader();

      reader.onload = function (e) {
        var data = this.result;
        data = JSON.parse(data);
        console.log(data);
        _libs_db__WEBPACK_IMPORTED_MODULE_1__["Db"].init(data);
        that.msg = '恢复成功!';
      };

      reader.readAsText(file);
    }
  }
});

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js?!../node_modules/vue-loader/lib/index.js?!./components/views/setting.vue?vue&type=style&index=0&id=5ba4b1f8&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--5-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js??ref--5-2!../node_modules/vue-loader/lib??vue-loader-options!./components/views/setting.vue?vue&type=style&index=0&id=5ba4b1f8&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".box[data-v-5ba4b1f8] {\n  margin-top: 2em;\n}\n", ""]);



/***/ }),

/***/ "../node_modules/style-loader/index.js?!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js?!../node_modules/vue-loader/lib/index.js?!./components/views/setting.vue?vue&type=style&index=0&id=5ba4b1f8&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/style-loader??ref--5-0!../node_modules/css-loader/dist/cjs.js??ref--5-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js??ref--5-2!../node_modules/vue-loader/lib??vue-loader-options!./components/views/setting.vue?vue&type=style&index=0&id=5ba4b1f8&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./setting.vue?vue&type=style&index=0&id=5ba4b1f8&lang=scss&scoped=true& */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js?!../node_modules/vue-loader/lib/index.js?!./components/views/setting.vue?vue&type=style&index=0&id=5ba4b1f8&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./setting.vue?vue&type=style&index=0&id=5ba4b1f8&lang=scss&scoped=true& */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js?!../node_modules/vue-loader/lib/index.js?!./components/views/setting.vue?vue&type=style&index=0&id=5ba4b1f8&lang=scss&scoped=true&", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./setting.vue?vue&type=style&index=0&id=5ba4b1f8&lang=scss&scoped=true& */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js?!../node_modules/vue-loader/lib/index.js?!./components/views/setting.vue?vue&type=style&index=0&id=5ba4b1f8&lang=scss&scoped=true&");

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

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/views/setting.vue?vue&type=template&id=5ba4b1f8&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./components/views/setting.vue?vue&type=template&id=5ba4b1f8&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
      _c("button", { staticClass: "button", on: { click: _vm.download } }, [
        _vm._v("备份配置")
      ]),
      _vm._v(" "),
      _c(
        "label",
        {
          staticClass: "button",
          attrs: { for: "upload" },
          on: { click: _vm.upload }
        },
        [_vm._v("恢复配置")]
      ),
      _vm._v(" "),
      _c("button", { staticClass: "button", on: { click: _vm.clean } }, [
        _vm._v("数据清洗")
      ]),
      _vm._v(" "),
      _c("input", {
        ref: "file",
        staticStyle: { position: "absolute", left: "-3000px" },
        attrs: { type: "file", id: "upload", name: "upload" },
        on: { change: _vm.upload }
      }),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        _vm.msg
          ? _c("div", { staticClass: "box" }, [_vm._v(" " + _vm._s(_vm.msg))])
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./components/views/setting.vue":
/*!**************************************!*\
  !*** ./components/views/setting.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setting_vue_vue_type_template_id_5ba4b1f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting.vue?vue&type=template&id=5ba4b1f8&scoped=true& */ "./components/views/setting.vue?vue&type=template&id=5ba4b1f8&scoped=true&");
/* harmony import */ var _setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.vue?vue&type=script&lang=js& */ "./components/views/setting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _setting_vue_vue_type_style_index_0_id_5ba4b1f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setting.vue?vue&type=style&index=0&id=5ba4b1f8&lang=scss&scoped=true& */ "./components/views/setting.vue?vue&type=style&index=0&id=5ba4b1f8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _setting_vue_vue_type_template_id_5ba4b1f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _setting_vue_vue_type_template_id_5ba4b1f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5ba4b1f8",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ../node_modules/vue-hot-reload-api/dist/index.js */ "../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "../node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('5ba4b1f8', component.options)
    } else {
      api.reload('5ba4b1f8', component.options)
    }
    module.hot.accept(/*! ./setting.vue?vue&type=template&id=5ba4b1f8&scoped=true& */ "./components/views/setting.vue?vue&type=template&id=5ba4b1f8&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _setting_vue_vue_type_template_id_5ba4b1f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting.vue?vue&type=template&id=5ba4b1f8&scoped=true& */ "./components/views/setting.vue?vue&type=template&id=5ba4b1f8&scoped=true&");
(function () {
      api.rerender('5ba4b1f8', {
        render: _setting_vue_vue_type_template_id_5ba4b1f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _setting_vue_vue_type_template_id_5ba4b1f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "components/views/setting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/views/setting.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./components/views/setting.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./setting.vue?vue&type=script&lang=js& */ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/views/setting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/views/setting.vue?vue&type=style&index=0&id=5ba4b1f8&lang=scss&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./components/views/setting.vue?vue&type=style&index=0&id=5ba4b1f8&lang=scss&scoped=true& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_ref_5_0_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_id_5ba4b1f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader??ref--5-0!../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./setting.vue?vue&type=style&index=0&id=5ba4b1f8&lang=scss&scoped=true& */ "../node_modules/style-loader/index.js?!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js?!../node_modules/vue-loader/lib/index.js?!./components/views/setting.vue?vue&type=style&index=0&id=5ba4b1f8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_ref_5_0_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_id_5ba4b1f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_ref_5_0_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_id_5ba4b1f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_ref_5_0_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_id_5ba4b1f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_ref_5_0_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_id_5ba4b1f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_ref_5_0_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_id_5ba4b1f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/views/setting.vue?vue&type=template&id=5ba4b1f8&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./components/views/setting.vue?vue&type=template&id=5ba4b1f8&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_5ba4b1f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./setting.vue?vue&type=template&id=5ba4b1f8&scoped=true& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/views/setting.vue?vue&type=template&id=5ba4b1f8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_5ba4b1f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_5ba4b1f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=view-setting.js.map