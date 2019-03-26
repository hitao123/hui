const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('docs'), resolve('test'), resolve('packages')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: true
  }
})

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "../"),
  entry: {
    "hui-docs": "./docs/src/index.js",
    "hui-mobile": "./docs/src/mobile.js"
  },
  output: {
    path: path.join(__dirname, "../docs/dist"),
    publicPath: "/",
    filename: "[name].js",
    chunkFilename: "async_[name].js"
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": resolve("src")
    }
  },
  module: {
    rules: [
      ...[createLintingRule()],
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.md$/,
        use: ["vue-loader", "@vant/markdown-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "images/[name].[hash:7].[ext]"
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "media/[name].[hash:7].[ext]"
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "fonts/[name].[hash:7].[ext]"
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      chunks: ["hui-docs"],
      template: "docs/src/index.html",
      filename: "index.html",
      inject: true
    }),
    new HtmlWebpackPlugin({
      chunks: ["hui-mobile"],
      template: "docs/src/index.html",
      filename: "mobile.html",
      inject: true
    }),
    // Cannot read property 'eslint' of undefined
    // https://github.com/webpack/webpack/issues/6556 eslint erroe
    // https://github.com/webpack/webpack/issues/8656 can not resolve import
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      options: {
        context: __dirname
      }
    })
  ],
  stats: {
    modules: false,
    children: false
  },
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    hot: true
  }
};
