## Search 搜索

### 使用指南

``` javascript
import { Search } from 'hui';

Vue.use(Search);
```

### 代码演示

#### 基础用法

`h-search` 中，v-model 用于控制搜索框中的文字。background 可以自定义搜索框外部背景色。

```html
<h-search placeholder="请输入搜索关键字" v-model="value" />
```

#### 监听对应事件

`h-search` 提供了 search 和 cancel 事件。search 事件在用户点击键盘上的 搜索/回车 按钮触发。cancel 事件在用户点击搜索框右侧取消按钮时触发

Tips: 在 `h-search` 外层增加 form 标签，并且 action 不为空，即可在 IOS 弹出的输入法中显示搜索按钮

```html
<form action="/">
  <h-search
    v-model="value"
    placeholder="请输入商品名称"
    show-action
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
```

#### 自定义行动按钮

`h-search` 支持自定义右侧取消按钮，使用名字为 action 的 slot 即可。使用此 slot 以后，原有的 cancel 事件不再生效。

```html
<h-search
  v-model="value"
  show-action
  @search="onSearch"
>
  <div slot="action" @click="onSearch">搜索</div>
</h-search>
```

### API
Search 默认支持 Input 标签所有的原生属性，比如 `maxlength`、`placeholder`、`readony`、`autofocus` 等

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| background | 搜索框背景色 | `String` | `#f2f2f2` |
| show-action | 是否在搜索框右侧显示取消按钮 | `Boolean` | `false` |

### Event
Search 默认支持 Input 标签所有的原生事件，如 `focus`、`blur`、`keypress` 等

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| cancel | 取消搜索 | - |
| search | 确定搜索 | - |

### Slot

| 名称 | 说明 |
|-----------|-----------|
| action | 自定义搜索框右侧按钮，需要在`showAction`为 true 时才会显示 |
