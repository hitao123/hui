webpackJsonp([3],{

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(443);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_20490733_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(567);
function injectStyle (ssrContext) {
  __webpack_require__(565)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_20490733_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 443:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    handleClick: function handleClick() {
      this.$toast({
        message: '我是提示文案，建议不超过十五字~'
      });
    },
    handleClick2: function handleClick2() {
      this.$toast.loading({
        mask: true,
        message: '加载中...'
      });
    },
    handleClick3: function handleClick3() {
      this.$toast.success('成功文案');
    },
    handleClick4: function handleClick4() {
      this.$toast.fail('失败文案');
    },
    handleClick5: function handleClick5() {
      var _this = this;

      var toast = this.$toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true, // 禁用背景点击
        loadingType: 'spinner',
        message: '倒计时 3 秒'
      });

      var second = 3;
      var timer = setInterval(function () {
        second--;
        if (second) {
          toast.message = '\u5012\u8BA1\u65F6 ' + second + ' \u79D2';
        } else {
          clearInterval(timer);
          _this.$toast.clear();
        }
      }, 1000);
    }
  }
});

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(566);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("61031fde", content, true, {});

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('demo-section',[_c('demo-block',{attrs:{"title":"文字提示"}},[_c('h-button',{attrs:{"text":"click"},on:{"click":_vm.handleClick}},[_vm._v("文字提示")])],1),_vm._v(" "),_c('demo-block',{attrs:{"title":"加载提示"}},[_c('h-button',{attrs:{"text":"click"},on:{"click":_vm.handleClick2}},[_vm._v("加载提示")])],1),_vm._v(" "),_c('demo-block',{attrs:{"title":"成功/失败提示"}},[_c('h-button',{attrs:{"text":"click"},on:{"click":_vm.handleClick3}},[_vm._v("成功提示")]),_vm._v(" "),_c('h-button',{attrs:{"text":"click"},on:{"click":_vm.handleClick4}},[_vm._v("失败提示")])],1),_vm._v(" "),_c('demo-block',{attrs:{"title":"高级用法"}},[_c('h-button',{attrs:{"text":"click"},on:{"click":_vm.handleClick5}},[_vm._v("高级用法")])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});