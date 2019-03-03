webpackJsonp([31],{

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(460);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_42dca7fa_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(591);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_42dca7fa_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 460:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      checked: false,
      checked2: true,
      checked3: true,
      checked4: true
    };
  },

  methods: {
    handleInput: function handleInput(value) {
      var _this = this;

      this.$dialog.confirm({
        title: '提醒',
        message: '是否切换开关'
      }).then(function () {
        _this.checked4 = value;
      });
    }
  }
});

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('demo-section',[_c('demo-block',{attrs:{"title":"基础用法"}},[_c('h-switch',{model:{value:(_vm.checked),callback:function ($$v) {_vm.checked=$$v},expression:"checked"}})],1),_vm._v(" "),_c('demo-block',{attrs:{"title":"disabled 状态"}},[_c('h-switch',{attrs:{"disabled":""},model:{value:(_vm.checked2),callback:function ($$v) {_vm.checked2=$$v},expression:"checked2"}})],1),_vm._v(" "),_c('demo-block',{attrs:{"title":"loading 状态"}},[_c('h-switch',{attrs:{"loading":""},model:{value:(_vm.checked3),callback:function ($$v) {_vm.checked3=$$v},expression:"checked3"}})],1),_vm._v(" "),_c('demo-block',{attrs:{"title":"高级用法"}},[_c('h-switch',{attrs:{"value":_vm.checked4},on:{"input":_vm.handleInput}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});