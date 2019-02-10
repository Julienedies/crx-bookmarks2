(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-setting"],{

/***/ "../node_modules/_babel-loader@8.0.5@babel-loader/lib/index.js!../node_modules/_vue-loader@15.5.1@vue-loader/lib/index.js?!./views/setting.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ../node_modules/_babel-loader@8.0.5@babel-loader/lib!../node_modules/_vue-loader@15.5.1@vue-loader/lib??vue-loader-options!./views/setting.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_chrome_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/chrome/index */ "./libs/chrome/index.js");
/* harmony import */ var _libs_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/db */ "./libs/db.js");
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
      regeneratorRuntime.mark(function _callee() {
        var visitObj, idArray, _i, id, b;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return visitDb.get();

              case 2:
                visitObj = _context.sent;
                idArray = Object.keys(visitObj);
                _i = 0;

              case 5:
                if (!(_i < idArray.length)) {
                  _context.next = 15;
                  break;
                }

                id = idArray[_i];
                _context.next = 9;
                return _libs_chrome_index__WEBPACK_IMPORTED_MODULE_0__["bookmarks"].get(id);

              case 9:
                b = _context.sent;
                this.msg = ['无效ID:'];

                if (!b) {
                  console.log(id);
                  visitDb.remove(id);
                  this.msg.push(id);
                }

              case 12:
                _i++;
                _context.next = 5;
                break;

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
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
      _libs_chrome_index__WEBPACK_IMPORTED_MODULE_0__["downloads"].download({
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

/***/ "../node_modules/_css-loader@2.1.0@css-loader/dist/cjs.js?!../node_modules/_vue-loader@15.5.1@vue-loader/lib/loaders/stylePostLoader.js!../node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js?!../node_modules/_vue-loader@15.5.1@vue-loader/lib/index.js?!./views/setting.vue?vue&type=style&index=0&id=0af97991&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/_css-loader@2.1.0@css-loader/dist/cjs.js??ref--5-1!../node_modules/_vue-loader@15.5.1@vue-loader/lib/loaders/stylePostLoader.js!../node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js??ref--5-2!../node_modules/_vue-loader@15.5.1@vue-loader/lib??vue-loader-options!./views/setting.vue?vue&type=style&index=0&id=0af97991&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@2.1.0@css-loader/dist/runtime/api.js */ "../node_modules/_css-loader@2.1.0@css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".box[data-v-0af97991] {\n  margin-top: 2em;\n}\n", ""]);



/***/ }),

/***/ "../node_modules/_style-loader@0.23.1@style-loader/index.js?!../node_modules/_css-loader@2.1.0@css-loader/dist/cjs.js?!../node_modules/_vue-loader@15.5.1@vue-loader/lib/loaders/stylePostLoader.js!../node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js?!../node_modules/_vue-loader@15.5.1@vue-loader/lib/index.js?!./views/setting.vue?vue&type=style&index=0&id=0af97991&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/_style-loader@0.23.1@style-loader??ref--5-0!../node_modules/_css-loader@2.1.0@css-loader/dist/cjs.js??ref--5-1!../node_modules/_vue-loader@15.5.1@vue-loader/lib/loaders/stylePostLoader.js!../node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js??ref--5-2!../node_modules/_vue-loader@15.5.1@vue-loader/lib??vue-loader-options!./views/setting.vue?vue&type=style&index=0&id=0af97991&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/_css-loader@2.1.0@css-loader/dist/cjs.js??ref--5-1!../../node_modules/_vue-loader@15.5.1@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js??ref--5-2!../../node_modules/_vue-loader@15.5.1@vue-loader/lib??vue-loader-options!./setting.vue?vue&type=style&index=0&id=0af97991&lang=scss&scoped=true& */ "../node_modules/_css-loader@2.1.0@css-loader/dist/cjs.js?!../node_modules/_vue-loader@15.5.1@vue-loader/lib/loaders/stylePostLoader.js!../node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js?!../node_modules/_vue-loader@15.5.1@vue-loader/lib/index.js?!./views/setting.vue?vue&type=style&index=0&id=0af97991&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/_style-loader@0.23.1@style-loader/lib/addStyles.js */ "../node_modules/_style-loader@0.23.1@style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../node_modules/_vue-loader@15.5.1@vue-loader/lib/loaders/templateLoader.js?!../node_modules/_vue-loader@15.5.1@vue-loader/lib/index.js?!./views/setting.vue?vue&type=template&id=0af97991&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/_vue-loader@15.5.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/_vue-loader@15.5.1@vue-loader/lib??vue-loader-options!./views/setting.vue?vue&type=template&id=0af97991&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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

/***/ "./views/setting.vue":
/*!***************************!*\
  !*** ./views/setting.vue ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setting_vue_vue_type_template_id_0af97991_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting.vue?vue&type=template&id=0af97991&scoped=true& */ "./views/setting.vue?vue&type=template&id=0af97991&scoped=true&");
/* harmony import */ var _setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.vue?vue&type=script&lang=js& */ "./views/setting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _setting_vue_vue_type_style_index_0_id_0af97991_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setting.vue?vue&type=style&index=0&id=0af97991&lang=scss&scoped=true& */ "./views/setting.vue?vue&type=style&index=0&id=0af97991&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_15_5_1_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.5.1@vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/_vue-loader@15.5.1@vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_5_1_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _setting_vue_vue_type_template_id_0af97991_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _setting_vue_vue_type_template_id_0af97991_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0af97991",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "views/setting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./views/setting.vue?vue&type=script&lang=js&":
/*!****************************************************!*\
  !*** ./views/setting.vue?vue&type=script&lang=js& ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_8_0_5_babel_loader_lib_index_js_node_modules_vue_loader_15_5_1_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@8.0.5@babel-loader/lib!../../node_modules/_vue-loader@15.5.1@vue-loader/lib??vue-loader-options!./setting.vue?vue&type=script&lang=js& */ "../node_modules/_babel-loader@8.0.5@babel-loader/lib/index.js!../node_modules/_vue-loader@15.5.1@vue-loader/lib/index.js?!./views/setting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_8_0_5_babel_loader_lib_index_js_node_modules_vue_loader_15_5_1_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./views/setting.vue?vue&type=style&index=0&id=0af97991&lang=scss&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./views/setting.vue?vue&type=style&index=0&id=0af97991&lang=scss&scoped=true& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_0_23_1_style_loader_index_js_ref_5_0_node_modules_css_loader_2_1_0_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_15_5_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_5_2_node_modules_vue_loader_15_5_1_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_id_0af97991_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_style-loader@0.23.1@style-loader??ref--5-0!../../node_modules/_css-loader@2.1.0@css-loader/dist/cjs.js??ref--5-1!../../node_modules/_vue-loader@15.5.1@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js??ref--5-2!../../node_modules/_vue-loader@15.5.1@vue-loader/lib??vue-loader-options!./setting.vue?vue&type=style&index=0&id=0af97991&lang=scss&scoped=true& */ "../node_modules/_style-loader@0.23.1@style-loader/index.js?!../node_modules/_css-loader@2.1.0@css-loader/dist/cjs.js?!../node_modules/_vue-loader@15.5.1@vue-loader/lib/loaders/stylePostLoader.js!../node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js?!../node_modules/_vue-loader@15.5.1@vue-loader/lib/index.js?!./views/setting.vue?vue&type=style&index=0&id=0af97991&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_0_23_1_style_loader_index_js_ref_5_0_node_modules_css_loader_2_1_0_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_15_5_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_5_2_node_modules_vue_loader_15_5_1_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_id_0af97991_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_0_23_1_style_loader_index_js_ref_5_0_node_modules_css_loader_2_1_0_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_15_5_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_5_2_node_modules_vue_loader_15_5_1_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_id_0af97991_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_0_23_1_style_loader_index_js_ref_5_0_node_modules_css_loader_2_1_0_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_15_5_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_5_2_node_modules_vue_loader_15_5_1_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_id_0af97991_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_0_23_1_style_loader_index_js_ref_5_0_node_modules_css_loader_2_1_0_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_15_5_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_5_2_node_modules_vue_loader_15_5_1_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_id_0af97991_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_0_23_1_style_loader_index_js_ref_5_0_node_modules_css_loader_2_1_0_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_15_5_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_5_2_node_modules_vue_loader_15_5_1_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_id_0af97991_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./views/setting.vue?vue&type=template&id=0af97991&scoped=true&":
/*!**********************************************************************!*\
  !*** ./views/setting.vue?vue&type=template&id=0af97991&scoped=true& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_5_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_5_1_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_0af97991_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.5.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.5.1@vue-loader/lib??vue-loader-options!./setting.vue?vue&type=template&id=0af97991&scoped=true& */ "../node_modules/_vue-loader@15.5.1@vue-loader/lib/loaders/templateLoader.js?!../node_modules/_vue-loader@15.5.1@vue-loader/lib/index.js?!./views/setting.vue?vue&type=template&id=0af97991&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_5_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_5_1_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_0af97991_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_5_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_5_1_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_0af97991_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=view-setting.js.map