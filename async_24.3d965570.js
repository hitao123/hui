webpackJsonp([24],{

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(345);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cf18b234_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(418);
function injectStyle (ssrContext) {
  __webpack_require__(416)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cf18b234_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      checkbox1: false,
      checkbox2: false,
      checkbox3: true,
      checkbox4: false,
      list: ['a', 'b', 'c'],
      result: ['a', 'b']
    };
  }
});

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(417);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("c35ababa", content, true, {});

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".demo-checkbox .h-checkbox{padding-left:20px;margin-top:5px}", ""]);

// exports


/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('demo-section',[_c('demo-block',{attrs:{"title":"基础用法"}},[_c('h-checkbox',{model:{value:(_vm.checkbox1),callback:function ($$v) {_vm.checkbox1=$$v},expression:"checkbox1"}},[_vm._v("原型复选框")]),_vm._v(" "),_c('h-checkbox',{attrs:{"shape":"square"},model:{value:(_vm.checkbox2),callback:function ($$v) {_vm.checkbox2=$$v},expression:"checkbox2"}},[_vm._v("方形复选框")])],1),_vm._v(" "),_c('demo-block',{attrs:{"title":"禁用状态"}},[_c('h-checkbox',{attrs:{"disabled":""},model:{value:(_vm.checkbox3),callback:function ($$v) {_vm.checkbox3=$$v},expression:"checkbox3"}},[_vm._v("复选框 a")]),_vm._v(" "),_c('h-checkbox',{attrs:{"disabled":""},model:{value:(_vm.checkbox4),callback:function ($$v) {_vm.checkbox4=$$v},expression:"checkbox4"}},[_vm._v("复选框 b")])],1),_vm._v(" "),_c('demo-block',{attrs:{"title":"复选框组"}},[_c('h-checkbox-group',{model:{value:(_vm.result),callback:function ($$v) {_vm.result=$$v},expression:"result"}},_vm._l((_vm.list),function(item,index){return _c('h-checkbox',{key:index,attrs:{"name":item}},[_vm._v("复选框 "+_vm._s(item))])}))],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});