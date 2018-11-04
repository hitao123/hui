webpackJsonp([22],{

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(320);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_21640a21_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(381);
function injectStyle (ssrContext) {
  __webpack_require__(379)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_21640a21_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 320:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      actions: [{
        name: '打开相机'
      }, {
        name: '选择照片',
        subname: 'tips'
      }, {
        loading: true
      }],
      visible: false,
      visible1: false,
      visible2: false
    };
  },

  methods: {
    handleClick: function handleClick() {
      this.visible = true;
    },
    handleClick1: function handleClick1() {
      this.visible1 = true;
    },
    handleClick2: function handleClick2() {
      this.visible2 = true;
    }
  }
});

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(380);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("ab0488c2", content, true, {});

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".actionsheet-demo{margin:20px auto;text-align:center}", ""]);

// exports


/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"actionsheet-demo"},[_c('h-button',{on:{"click":_vm.handleClick}},[_vm._v("action title")])],1),_vm._v(" "),_c('div',{staticClass:"actionsheet-demo"},[_c('h-button',{on:{"click":_vm.handleClick1}},[_vm._v("action 列表")])],1),_vm._v(" "),_c('div',{staticClass:"actionsheet-demo"},[_c('h-button',{on:{"click":_vm.handleClick2}},[_vm._v("action 取消")])],1),_vm._v(" "),_c('h-actionsheet',{attrs:{"title":"title"},model:{value:(_vm.visible),callback:function ($$v) {_vm.visible=$$v},expression:"visible"}},[_vm._v("\n    内容\n  ")]),_vm._v(" "),_c('h-actionsheet',{attrs:{"actions":_vm.actions},model:{value:(_vm.visible1),callback:function ($$v) {_vm.visible1=$$v},expression:"visible1"}}),_vm._v(" "),_c('h-actionsheet',{attrs:{"title":"title","cancelText":"取消"},model:{value:(_vm.visible2),callback:function ($$v) {_vm.visible2=$$v},expression:"visible2"}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});