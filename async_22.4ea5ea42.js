webpackJsonp([22],{

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(432);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0da60908_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(521);
function injectStyle (ssrContext) {
  __webpack_require__(519)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0da60908_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 432:
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
      action: 'delete',
      url: 'https://img.xiami.net/images/appv5/common/21873/58d54521900f9_ZaG9_1490371873.jpg'
    };
  },

  methods: {
    handleClick: function handleClick(draw) {
      draw.clear();
    },
    handleTransform: function handleTransform(draw) {
      draw.rotate(90);
    },
    handleDownLoad: function handleDownLoad(draw) {
      draw.downloadPNGImage(draw.getPNGImage());
    },
    handleDraw: function handleDraw(draw) {
      draw.drawImage(this.url);
    },
    handleBlob: function handleBlob(draw) {
      var blob = draw.dataURLtoBlob(draw.getPNGImage());
      console.log(blob);
    }
  }
});

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(520);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("44711d72", content, true, {});

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('demo-section',[_c('demo-block',{attrs:{"title":"基础用法"}},[_c('h-hand-writing',{on:{"delete":_vm.handleClick}})],1),_vm._v(" "),_c('demo-block',{attrs:{"title":"高级用法"}},[_c('h-hand-writing',{attrs:{"id":"canvas2","action":_vm.action},on:{"download":_vm.handleDownLoad,"draw":_vm.handleDraw,"blob":_vm.handleBlob}},[_c('div',{staticClass:"demo-rewrite",attrs:{"slot":"rewrite"},slot:"rewrite"},[_c('h-button',{attrs:{"size":"large"},on:{"click":function($event){_vm.action = 'download'}}},[_vm._v("下载")]),_vm._v(" "),_c('h-button',{attrs:{"size":"large"},on:{"click":function($event){_vm.action = 'draw'}}},[_vm._v("画图")]),_vm._v(" "),_c('h-button',{attrs:{"size":"large"},on:{"click":function($event){_vm.action = 'blob'}}},[_vm._v("获取 Blob对象")])],1)])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});