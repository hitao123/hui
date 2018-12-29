# dialog 对话框

### 使用指南

``` javascript
import { dialog } from 'hui';

Vue.use(dialog);
```

### 代码演示

#### 基本用法

用于提示一些消息，只包含一个确认按钮

```javascript
Dialog.alert({
  title: '标题',
  message: '弹窗内容'
}).then(() => {
  // on close
});

Dialog.alert({
  message: '弹窗内容'
}).then(() => {
  // on close
});
```

#### 消息确认

用于确认消息，包含取消和确认按钮

```javascript
Dialog.confirm({
  title: '标题',
  message: '弹窗内容'
}).then(() => {
  // on confirm
}).catch(() => {
  // on cancel
});
```

#### 全局方法

引入 Dialog 组件后，会自动在 Vue 的 prototype 上挂载 $dialog 方法，在所有组件内部都可以直接调用此方法

```js
export default {
  mounted() {
    this.$dialog.alert({
      message: '弹窗内容'
    });
  }
}
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| v-model | 是否显示弹窗 | `Boolean` | - |
| title | 标题 | `String` | - |
| message | 内容 | `String` | - |
| show-confirm-button | 是否展示确认按钮 | `Boolean` |  `true` |
| show-cancel-button | 是否展示取消按钮 | `Boolean` |  `false` |
| confirm-button-text | 确认按钮的文案 | `String` |  `确认` |
| cancel-button-text | 取消按钮的文案 | `String` | `取消` |
| overlay | 是否展示蒙层 | `Boolean` | `true` |
| close-on-click-overlay | 点击蒙层时是否关闭弹窗 | `Boolean` | `false` |
| before-close | 关闭前的回调函数，<br>调用 done() 后关闭弹窗，<br>调用 done(false) 可以阻止弹窗关闭 | (action: string, done: function) => void | - |

### Event

| 事件 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| confirm | 点击确认按钮时触发 | - |
| cancel | 点击取消按钮时触发 | - |
