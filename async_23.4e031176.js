webpackJsonp([23],{

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(418);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3050f414_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(497);
function injectStyle (ssrContext) {
  __webpack_require__(495)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3050f414_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 418:
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

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(496);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("6b2a8d06", content, true, {});

/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".demo-col{padding:0 20px}.demo-col .h-col{margin-bottom:10px;font-size:14px;line-height:30px;color:#fff;text-align:center;background-clip:content-box}.demo-col .h-col:nth-child(odd){background-color:#f05a22}.demo-col .h-col:nth-child(2n){background-color:#faa800}", ""]);

// exports


/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('demo-section',[_c('demo-block',{attrs:{"title":"基础用法"}},[_c('h-row',[_c('h-col',{attrs:{"span":"8"}},[_vm._v("span: 8")]),_vm._v(" "),_c('h-col',{attrs:{"span":"8"}},[_vm._v("span: 8")]),_vm._v(" "),_c('h-col',{attrs:{"span":"8"}},[_vm._v("span: 8")])],1),_vm._v(" "),_c('h-row',[_c('h-col',{attrs:{"span":"4"}},[_vm._v("span: 4")]),_vm._v(" "),_c('h-col',{attrs:{"span":"10","offset":"4"}},[_vm._v("offset: 4, span: 10")])],1),_vm._v(" "),_c('h-row',[_c('h-col',{attrs:{"offset":"12","span":"12"}},[_vm._v("offset: 12, span: 12")])],1)],1),_vm._v(" "),_c('demo-block',{attrs:{"title":"设置列元素间距"}},[_c('h-row',{attrs:{"gutter":"20"}},[_c('h-col',{attrs:{"span":"8"}},[_vm._v("span 8")]),_vm._v(" "),_c('h-col',{attrs:{"span":"8"}},[_vm._v("span 8")]),_vm._v(" "),_c('h-col',{attrs:{"span":"8"}},[_vm._v("span 8")])],1)],1),_vm._v(" "),_c('demo-block',{attrs:{"title":"Flex 布局"}},[_c('h-row',{attrs:{"type":"flex"}},[_c('h-col',{attrs:{"span":"6"}},[_vm._v("span: 6")]),_vm._v(" "),_c('h-col',{attrs:{"span":"6"}},[_vm._v("span: 6")]),_vm._v(" "),_c('h-col',{attrs:{"span":"6"}},[_vm._v("span: 6")])],1),_vm._v(" "),_c('h-row',{attrs:{"type":"flex","justify":"center"}},[_c('h-col',{attrs:{"span":"6"}},[_vm._v("span: 6")]),_vm._v(" "),_c('h-col',{attrs:{"span":"6"}},[_vm._v("span: 6")]),_vm._v(" "),_c('h-col',{attrs:{"span":"6"}},[_vm._v("span: 6")])],1),_vm._v(" "),_c('h-row',{attrs:{"type":"flex","justify":"end"}},[_c('h-col',{attrs:{"span":"6"}},[_vm._v("span: 6")]),_vm._v(" "),_c('h-col',{attrs:{"span":"6"}},[_vm._v("span: 6")]),_vm._v(" "),_c('h-col',{attrs:{"span":"6"}},[_vm._v("span: 6")])],1),_vm._v(" "),_c('h-row',{attrs:{"type":"flex","justify":"space-between"}},[_c('h-col',{attrs:{"span":"6"}},[_vm._v("span: 6")]),_vm._v(" "),_c('h-col',{attrs:{"span":"6"}},[_vm._v("span: 6")]),_vm._v(" "),_c('h-col',{attrs:{"span":"6"}},[_vm._v("span: 6")])],1),_vm._v(" "),_c('h-row',{attrs:{"type":"flex","justify":"space-around"}},[_c('h-col',{attrs:{"span":"6"}},[_vm._v("span: 6")]),_vm._v(" "),_c('h-col',{attrs:{"span":"6"}},[_vm._v("span: 6")]),_vm._v(" "),_c('h-col',{attrs:{"span":"6"}},[_vm._v("span: 6")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});