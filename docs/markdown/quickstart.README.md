## 快速上手

### 脚手架

我们提供了开箱即用的开发脚手架，通过 [vue-cli](https://github.com/vuejs/vue-cli) 即可快速创建一个基于 `hui` 的项目。

```shell
vue init rvs-template/vue-cli-template-hui my-project
```

### 安装

#### NPM

```shell
npm i hui -S
```

#### YARN

```shell
yarn add hui
```

#### CDN

访问下面的文件 URL，会自动重定向至最新版本的 CDN 链接，建议使用固定版本的 CDN 链接，避免升级时受到非兼容性更新的影响。

```html

```

### 引入组件

#### 方式一. 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (推荐)

`babel-plugin-import` 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式

```bash
# 安装 babel-plugin-import 插件
npm i babel-plugin-import -D
```

```js
// 在 .babelrc 或 babel-loader 中添加插件配置
// 注意：webpack 1 无需设置 libraryDirectory
{
  "plugins": [
    ["import", {
      "libraryName": "hui",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}
```

接着你可以在代码中直接引入 hui 组件，插件会自动将代码转化为方式二中的按需引入形式

```js
import { Button, Cell } from 'hui';
```

> 如果你在使用 TypeScript，可以使用 [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) 实现按需引入

#### 方式二. 按需引入组件

在不使用插件的情况下，可以手动引入需要的组件

```js
import Button from 'hui/lib/button';
```

#### 方式三. 导入所有组件

```js
import Vue from 'vue';
import Hui from 'hui';

Vue.use(Hui);
```

> 注意：配置 babel-plugin-import 插件后将不允许导入所有组件

