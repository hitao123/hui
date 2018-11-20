/**
 * build lib
 */

const fs = require('fs-extra');
const path = require('path');
const compiler = require('./compiler');

const esDir = path.join(__dirname, '../es');
const libDir = path.join(__dirname, '../lib');
const srcDir = path.join(__dirname, '../packages');

const whiteList = /(demo|test|less|\.md)$/;

fs.emptyDirSync(libDir);
fs.emptyDirSync(esDir);

function compile(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const absolutePath = path.join(dir, file);
    if (whiteList.test(file)) {
      fs.removeSync(absolutePath);
    } else if (isDir(absolutePath)) {
      return compile(absolutePath);
    } else if (/.vue$/.test(file)) {
      const source = fs.readFileSync(absolutePath, 'utf-8');
      fs.removeSync(absolutePath);

      const outputJsPath = absolutePath.replace('.vue', '.js');
      fs.outputFileSync(outputJsPath, compiler(source).js);
    } else if (/.js$/.test(file)) {
    }
  })
}


function isDir(dir) {
  return fs.lstatSync(dir).isDirectory();
}

fs.copySync(srcDir, libDir);
compile(libDir);
