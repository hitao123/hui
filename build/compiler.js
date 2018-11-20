const compiler = require('vue-template-compiler');

module.exports = function(code, config = {}) {
  const component = compiler.parseComponent(code);
  const { styles, template } = component;
  const script = component.script || { content: 'export default {};' };
  console.log(styles, template, script)
  let js;
  let css;
  if (template) {

  } else {

  }
  return { js, css };
}
