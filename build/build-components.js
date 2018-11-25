/**
 * build components
 */

const fs = require('fs-extra');
const path = require('path');
const babel = require('babel-core');
const compiler = require('vue-sfc-compiler2');

const compilerOption = {
  babel: {
    extends: path.join(__dirname, '../.babelrc')
  }
};

const esDir = path.join(__dirname, '../es');
const libDir = path.join(__dirname, '../lib');
const srcDir = path.join(__dirname, '../packages');

const whiteList = /(demo|test|less|\.md)$/;

fs.emptyDirSync(libDir);
fs.emptyDirSync(esDir);

// copy packages compile es
fs.copySync(srcDir, esDir);
compile(esDir);

function compile(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const absolutePath = path.join(dir, file);
    if (whiteList.test(file)) {
      fs.removeSync(absolutePath);
    } else if (isDir(absolutePath)) {
      return compile(absolutePath);
    } else if (/\.vue$/.test(file)) {
      const source = fs.readFileSync(absolutePath, 'utf-8');
      fs.removeSync(absolutePath);

      const outputVuePath = absolutePath + '.js';
      const outputJsPath = absolutePath.replace('.vue', '.js');
      const output = fs.existsSync(outputJsPath) ? outputVuePath : outputJsPath;

      fs.outputFileSync(output, compiler(source, compilerOption).js);
    } else if (/\.js$/.test(file)) {
      const { code } = babel.transformFileSync(absolutePath, compilerOption.babel);
      fs.outputFileSync(absolutePath, code);
    }
  })
}

process.env.BABEL_ENV = 'commonjs';

// compile lib
fs.copySync(esDir, libDir);
compile(libDir);

function isDir(dir) {
  return fs.lstatSync(dir).isDirectory();
}
