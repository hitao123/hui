const Components = require('./get-components')();
const path = require('path');
const fs = require('fs');
const uppercamelcase = require('uppercamelcase');

const tips = '// This file is auto gererated by build/bin/build-entry.js';

function buildEntry() {
  const uninstallComponents = [
    'less',
    'utils'
  ];
  const importList = Components
    .filter(item => { return uninstallComponents.indexOf(item) === -1 })
    .map(item => {
      return `import ${uppercamelcase(item)} from './${item}';`;
    })
  const installList = Components
    .filter(name => !~uninstallComponents.indexOf(name))
    .map(name => uppercamelcase(name))


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

if (window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  ${installList.join(',\n  ')}
};

export default {
  install
};
`;

  fs.writeFileSync(path.join(__dirname, '../packages/index.js'), content);
}

function buildRoute() {
  const dir = path.join(__dirname, '../docs/src/views');
  const demos = fs.readdirSync(dir)
  .filter(name => ~name.indexOf('.vue'))
  .filter(name => name.indexOf('index.vue'))
  .map(name => name.replace('.vue', ''))
  .map(name => `import ${name} from './views/${name}.vue'`)

  const demosImport = fs.readdirSync(dir)
  .filter(name => ~name.indexOf('.vue'))
  .filter(name => name.indexOf('index.vue'))
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
      'name': 'index',
      'component': indexList
    }`);




  const content = `${tips}

import Vue from 'vue';
import Router from 'vue-router';
import Hui from '../../packages';
import indexList from './views/index';

${demos.join('\n')}

Vue.use(Hui).use(Router);

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
  .filter(name => name.indexOf('index.vue'))
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

// function mkdirReadme() {
//   fs.readdirSync(path.resolve(__dirname, '../packages')).forEach((item, index) => {
//     if (item.indexOf('.DS_Store') < 0 && item.indexOf('less') < 0 && item.indexOf('index.js') < 0) {

//       let a = path.join(__dirname, '../packages/', item, 'README.md');
//       fs.writeFileSync(a, `# ${item}`)
//     }
//   })
// }

buildEntry()
buildRoute()
buildRouteList()
// mkdirReadme()
