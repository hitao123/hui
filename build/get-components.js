const fs = require('fs');
const path = require('path');

module.exports = function() {
  const dirs = fs.readdirSync(path.resolve(__dirname, '../packages'));
  const excludes = ['.DS_Store', 'index.js'];
  return dirs.filter(dir => {
    return excludes.indexOf(dir) === -1
  })
}
