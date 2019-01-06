## text-mask 输入框

`input`的输入框, 如果不是严格的需要格式化，不要使用该组件

### 使用指南

``` javascript
import { TextMask } from 'hui';

Vue.use(TextMask);
```

### 代码演示

#### 基础用法

通过 v-model 绑定输入框的值

```html
<h-cell-group>
  <h-text-mask v-model="value" label="身份证号" placeholder="请输入身份证"
    :mask="[/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /[\d|X|x]/]"
  >
  </h-text-mask>
</h-cell-group>
```

#### 高级用法

```html
<h-cell-group>
  <h-text-mask v-model="value4" label="银行卡" placeholder="请输入银行卡号" placeholder-char="_" :guide="true" :show-mask="true" :mask="[/[1-9]/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]"></h-text-mask>
</h-cell-group>
```

### API

Field 默认支持 Input 标签所有的原生属性，比如 `maxlength`、`placeholder`、`autofocus` 等

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|-------------|
| label | 输入框左侧文本 | `String` | - |
| value | 当前输入的值 | `String | Number` | - |
| type | 可设置为任意原生类型, 如 `number` `tel` `textarea` | `String` | `text` |
| border | 是否显示内边框 | `Boolean` | `true` |
| disabled | 是否禁用输入框 | `Boolean` | `false` |
| readonly | 是否只读 | `Boolean` | `false` |
| clearable | 是否启用清除控件 | `Boolean` | `false` |
| required | 是否显示表单必填星号 | `Boolean` | `false` |
| is-link | 是否展示右侧箭头并开启点击反馈 | `Boolean` | `false` |
| error | 是否将输入内容标红 | `Boolean` | `false` |
| error-message | 底部错误提示文案，为空时不展示 | `String` | `''` |
| icon | 输入框尾部图标 (可选值见 Icon 组件)  | `String` | - |
| left-icon | 输入框左侧图标 (可选值见 Icon 组件)  | `String` | - |
| mask | 输入的格式 | `Array` | - |
| placeholder-char | placeholder 格式 | `String` | - |
| show-mask | 是否展示 mask | `Bool` | false |

### Event

Field 默认支持 Input 标签所有的原生事件，如 `focus`、`blur`、`keypress` 等

| 事件 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| click-icon | 点击尾部图标时触发 | - |

### 方法

通过 ref 可以获取到 field 实例并调用实例方法

| 方法名 | 参数 | 返回值 | 介绍 |
|-----------|-----------|-----------|-------------|
| blur | - | - | 取消输入框焦点 |

### Slot

| 名称 | 说明 |
|-----------|-----------|
| label | 自定义输入框标签 |
| icon | 自定义输入框尾部图标 |
| button | 自定义输入框尾部按钮 |
