webpackJsonp([13],{

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(343);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3bb685b1_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(431);
function injectStyle (ssrContext) {
  __webpack_require__(429)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3bb685b1_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 343:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      value: ''
    };
  }
});

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(430);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("0b360fb5", content, true, {});

/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".demo-number{text-align:center}", ""]);

// exports


/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('demo-section',[_c('demo-block',{attrs:{"title":"基本用法"}},[_c('h-button',{nativeOn:{"touchstart":function($event){$event.stopPropagation();_vm.keyboard = 'default'}}},[_vm._v("默认键盘")]),_vm._v(" "),_c('h-number-keyboard',{attrs:{"show":_vm.keyboard === 'default',"closeButtonText":"关闭"},on:{"input":_vm.handleInput,"delete":_vm.handleDelete,"close":_vm.handleClose}})],1),_vm._v(" "),_c('demo-block',{attrs:{"title":"高级用法"}},[_c('h-button',{nativeOn:{"touchstart":function($event){$event.stopPropagation();_vm.keyboard = 'custom'}}},[_vm._v("自定义键盘")]),_vm._v(" "),_c('h-number-keyboard',{attrs:{"show":_vm.keyboard === 'custom',"closeButtonText":"关闭"},on:{"input":_vm.handleInput,"delete":_vm.handleDelete,"close":_vm.handleClose}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});