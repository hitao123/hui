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
  // const installList = Components.filter(item => { console.log(item, uppercamelcase(item)); uppercamelcase(item) });


const content = `${tips}
${importList.join('\n')}

const components = [
  ${exportList.join(',\n  ')}
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
};
`;

  fs.writeFileSync(path.join(__dirname, '../packages/index.js'), content);
}

function buildRoute() {
  const dir = path.join(__dirname, '../docs/src/views');
  const demos = fs.readdirSync(dir)
  .filter(name => ~name.indexOf('.vue'))
  .map(name => name.replace('.vue', ''))
  .map(name => `import ${name} from './views/${name}.vue'`)

  const demosImport = fs.readdirSync(dir)
  .filter(name => ~name.indexOf('.vue'))
  .map(name => name.replace('.vue', ''))
  .map(name => {
    return `{
      'path': '/${name}',
      'name': '${name}',
      'component': ${name}
    }`
  })

  // 添加首页 index route
  demosImport.push(`{
      'path': '/',
      'name': index,
      'component': indexList
    }`);




  const content = `${tips}

import Vue from 'vue';
import Router from 'vue-router';
import indexList from './views/index';

${demos.join('\n')}

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    ${demosImport.join(',\n    ')}
  ]
});
`
  fs.writeFileSync(path.join(dir, '../router.js'), content);
}


function buildRouteList() {
  const dir = path.join(__dirname, '../docs/src/views');
  const demoList = fs.readdirSync(dir)
  .filter(name => ~name.indexOf('.vue'))
  .map(name => name.replace('.vue', ''))
  .map(name => {
    return `{
    'path': '/${name}',
    'name': '${name}'
  }`
  })

content = `
export default [
  ${demoList.join(',\n  ')}
];
`
  fs.writeFileSync(path.join(dir, '../demo.config.js'), content);
}

buildEntry()
buildRoute()
buildRouteList()
