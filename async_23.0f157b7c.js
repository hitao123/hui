webpackJsonp([23],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(329);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f2be5f2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(395);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f2be5f2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 329:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      activeNames: ['1'],
      active2: '',
      active3: []
    };
  }
});

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('demo-section',[_c('demo-block',{attrs:{"title":"基本用法"}},[_c('h-collapse',{model:{value:(_vm.activeNames),callback:function ($$v) {_vm.activeNames=$$v},expression:"activeNames"}},[_c('h-collapse-item',{attrs:{"title":"测试一","name":"1"}},[_vm._v("手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一")]),_vm._v(" "),_c('h-collapse-item',{attrs:{"title":"测试二","name":"2"}},[_vm._v("测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三")]),_vm._v(" "),_c('h-collapse-item',{attrs:{"title":"测试三","name":"3"}},[_vm._v("基本用法基本用法基本用法基本用法基本用法基本用法基本用法基本用法基本用法基本用法")])],1)],1),_vm._v(" "),_c('demo-block',{attrs:{"title":"手风琴"}},[_c('h-collapse',{attrs:{"accordion":""},model:{value:(_vm.active2),callback:function ($$v) {_vm.active2=$$v},expression:"active2"}},[_c('h-collapse-item',{attrs:{"title":"手风琴一","name":"1"}},[_vm._v("手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一")]),_vm._v(" "),_c('h-collapse-item',{attrs:{"title":"手风琴二","name":"2"}},[_vm._v("基本用法基本用法基本用法基本用法基本用法基本用法基本用法基本用法基本用法基本用法")]),_vm._v(" "),_c('h-collapse-item',{attrs:{"title":"手风琴三","name":"3"}},[_vm._v("测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三")])],1)],1),_vm._v(" "),_c('demo-block',{attrs:{"title":"自定义标题内容"}},[_c('h-collapse',{model:{value:(_vm.active3),callback:function ($$v) {_vm.active3=$$v},expression:"active3"}},[_c('h-collapse-item',[_c('div',{attrs:{"slot":"title"},slot:"title"},[_vm._v("自定义标题"),_c('h-icon',{attrs:{"name":"question"}})],1),_vm._v("\n        自定义标题内容自定义标题内容自定义标题内容自定义标题内容自定义标题内容\n      ")]),_vm._v(" "),_c('h-collapse-item',{attrs:{"title":"自定义二","value":"内容","icon":"shop"}},[_vm._v("\n        手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一\n      ")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});