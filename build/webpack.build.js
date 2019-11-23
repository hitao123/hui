const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const config = require('./webpack.dev.js');
const isMinify = process.argv.indexOf('-p') !== -1;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

delete config.serve;

module.exports = Object.assign(config, {
  mode: 'production',
  entry: {
    'hui': './packages/index.js'
  },
  output: {
    path: path.join(__dirname, '../lib'),
    library: 'hui',
    libraryTarget: 'umd',
    filename: isMinify ? '[name].min.js' : '[name].js',
    umdNamedDefine: true,
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      options: {
        vue: {
          autoprefixer: false,
          preserveWhitespace: false
        }
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
});
