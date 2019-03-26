const path = require('path');
const config = require('./webpack.dev.js');
const merge = require('webpack-merge')


delete config.devServer;

module.exports = merge(config, {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../docs/dist'),
    publicPath: 'https://hitao123.github.io/hui/',
    filename: '[name].[hash:8].js',
    chunkFilename: 'async_[name].[chunkhash:8].js'
  }
});
