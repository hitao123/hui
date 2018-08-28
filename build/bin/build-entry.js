const Components = require('./get-components')();
const path = require('path');
const fs = require('fs');
const uppercamelcase = require('uppercamelcase');

const tips = '// This file is auto gererated by build/bin/build-entry.js';

function buildEntry() {
  const uninstallList = [
    'Lazyload'
  ];
  const importList = Components.map(item => `import ${uppercamelcase(item)} from './${item}';`);
  const exportList = Components.map(item => `${uppercamelcase(item)}`);
  const installList = Components.filter(item => !~uninstallList.indexOf(uppercamelcase(item)));


const content = `${tips}
${importList.join('\n')}

const components = [
  ${installList.join(',\n  ')}
];

const install = Vue => {
  components.forEach(item => {
    Vue.use(item);
  });
}

if (window !== 'undefined' && window.Vue !== 'undefined') {
  install(window.Vue);
}

export {
  install,
  ${exportList.join(',\n  ')}
};`;

  fs.writeFileSync(path.join(__dirname, '../../packages/index.js'), content);
}

function buildDemoEntry() {
  const dir = path.join(__dirname, '../../docs/demos/views');
  const demos = fs.readdirSync(dir)
  .filter(name => ~name.indexOf('.vue'))
  .map(name => name.replace('.vue', ''))
  .map(name => `const ${name} = () => import('./views/${name}.vue');`)

const content = `${tips}

export default {
  ${demos.join('\n  ')}
};

`
  fs.writeFileSync(path.join(dir, '../index.js'), content);
}

buildEntry()
buildDemoEntry()
