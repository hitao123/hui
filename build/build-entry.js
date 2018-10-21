const Components = require('./get-components')();
const path = require('path');
const fs = require('fs');
const uppercamelcase = require('uppercamelcase');
const glob = require('fast-glob');
const root = path.join(__dirname, '../');
const join = dir => path.join(root, dir);
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

// 生成 docs 入口文档
function buildDocsEntry() {
  const output = join('docs/src/docs-entry.js');
  const getName = fullPath => fullPath.replace(/\/(README)/, '.$1').split('/').pop().replace('.md', '');
  // glob模块允许你使用 *等符号, 来写一个glob规则获取匹配对应规则的文件
  const docs = glob.sync([
    join('docs/**/*.md'),
    join('packages/**/*.md'),
    join('!**/node_modules/**')
  ]).map((fullPath) => {
    const name = getName(fullPath);
    return `'${name}': () => import('${path.relative(join('docs/src'), fullPath)}')`
  })

  const content = `${tips}

export default {
  ${docs.join(',\n  ')}
};
`;

  fs.writeFileSync(output, content);
}


buildEntry()
buildRoute()
buildRouteList()
buildDocsEntry()
