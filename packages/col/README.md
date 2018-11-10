## Layout 布局

### 使用指南

``` javascript
import { Row, Col } from 'hui';

Vue.use(Row).use(Col);
```

### 代码演示

#### 基本用法

Layout 组件提供了24列栅格，通过在Col上添加span属性设置列所占的宽度百分比
此外，添加offset属性可以设置列的偏移宽度，计算方式与 span 相同

```html
  <h-row>
    <h-col span="8">span: 8</h-col>
    <h-col span="8">span: 8</h-col>
    <h-col span="8">span: 8</h-col>
  </h-row>

  <h-row>
    <h-col span="4">span: 4</h-col>
    <h-col span="10" offset="4">offset: 4, span: 10</h-col>
  </h-row>

  <h-row>
    <h-col offset="12" span="12">offset: 12, span: 12</h-col>
  </h-row>
```

#### 设置列元素间距

通过`gutter`属性可以设置列元素之间的间距，默认间距为 0

```html
<h-row gutter="20">
  <h-col span="8">span: 8</h-col>
  <h-col span="8">span: 8</h-col>
  <h-col span="8">span: 8</h-col>
</h-row>
```

#### Flex 布局

将 `type` 属性设置为 flex 可以启用 flex 布局，便于进行灵活的对齐

```html
<!-- 左对齐 -->
<h-row type="flex">
  <h-col span="6">span: 6</h-col>
  <h-col span="6">span: 6</h-col>
  <h-col span="6">span: 6</h-col>
</h-row>

<!-- 居中 -->
<h-row type="flex" justify="center">
  <h-col span="6">span: 6</h-col>
  <h-col span="6">span: 6</h-col>
  <h-col span="6">span: 6</h-col>
</h-row>

<!-- 右对齐 -->
<h-row type="flex" justify="end">
  <h-col span="6">span: 6</h-col>
  <h-col span="6">span: 6</h-col>
  <h-col span="6">span: 6</h-col>
</h-row>

<!-- 两端对齐 -->
<h-row type="flex" justify="space-between">
  <h-col span="6">span: 6</h-col>
  <h-col span="6">span: 6</h-col>
  <h-col span="6">span: 6</h-col>
</h-row>

<!-- 每个元素的两侧间隔相等 -->
<h-row type="flex" justify="space-around">
  <h-col span="6">span: 6</h-col>
  <h-col span="6">span: 6</h-col>
  <h-col span="6">span: 6</h-col>
</h-row>
```

### API

#### Row

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| type | 布局方式，可选值为 `flex` | `String` | `-` |
| justify | Flex 主轴对齐方式，可选值为 `end` `center` `space-between` `space-around` | `String` | `start` |
| align | Flex 交叉轴对齐方式，可选值为 `center` `bottom` | `String` | `top` |
| tag | 自定义元素标签 | `String` | `div` |
| gutter | 列元素之间的间距 | `String | Number` | 0 |

#### Col

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| span | 列元素宽度 | `String | Number` | `-` |
| offset | 列元素偏移距离 | `String | Number` | `-` |
| tag | 自定义元素标签 | `String` | `div` |

### Event
