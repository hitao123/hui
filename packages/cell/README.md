## Cell 单元格

### 使用指南

``` javascript
import { Cell, CellGroup } from 'hui';

Vue.use(Cell).use(CellGroup);
```

### 代码演示

#### 基础用法

将`h-cell-group`组件看成一个容器即可

```html
<h-cell-group>
  <h-cell title="单元格" value="内容" />
  <h-cell title="单元格" value="内容" label="描述信息" />
</h-cell-group>
```

#### 只设置value

只设置`value`时会向左对齐

```html
<h-cell-group>
  <h-cell value="内容" />
</h-cell-group>
```

#### 展示图标

通过`icon`属性在标题左侧展示图标

```html
<h-cell-group>
  <h-cell title="单元格" icon="location" />
</h-cell-group>
```

#### 展示箭头

传入`is-link`属性则会在右侧显示箭头，并且可以通过传入`arrow-direction`属性控制箭头方向

```html
<h-cell-group>
  <h-cell title="单元格" is-link />
  <h-cell title="单元格" is-link value="内容" />
  <h-cell title="单元格" is-link arrow-direction="down" value="内容" />
</h-cell-group>
```

#### 高级用法

如以上用法不能满足你的需求，可以使用对应的`slot`来自定义显示的内容

```html
<h-cell-group>
  <h-cell value="内容" icon="shop" is-link>
    <template slot="title">
      <span class="h-cell-text">单元格</span>
      <h-tag type="danger">标签</h-tag>
    </template>
  </h-cell>
  <h-cell title="单元格" icon="location" is-link />
  <h-cell title="单元格">
    <h-icon slot="right-icon" name="search" class="h-cell__right-icon" />
  </h-cell>
</h-cell-group>
```

### CellGroup API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| border | 是否显示外边框 | `Boolean` | `true` |

### Cell API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| icon | 左侧图标，可选值见 Icon 组件 | `String` | - |
| title | 左侧标题 | `String | Number` | - |
| value | 右侧内容 | `String | Number` | - |
| label | 标题下方的描述信息 | `String` | - |
| border | 是否显示内边框 | `Boolean` | `true` |
| center | 是否使内容垂直居中 | `Boolean` | `false` |
| url | 跳转链接 | `String` | - |
| to | 路由跳转对象，同 `vue-router` 的 to | `String | Object` | - |
| replace | 跳转时是否替换当前 history | `String` | `false` |
| clickable | 是否开启点击反馈 | `Boolean` | `false` |
| is-link | 是否展示右侧箭头并开启点击反馈 | `Boolean` | `false` |
| required | 是否显示表单必填星号 | `Boolean` | `false` |
| arrow-direction | 箭头方向，可选值为 `left` `up` `down` | `String` | - |

### Cell Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click | 点击 cell 时触发 | - |

### Cell Slot

| 名称 | 说明 |
|-----------|-----------|
| - | 自定义显示内容 |
| icon | 自定义`icon` |
| title | 自定义`title` |
| right-icon | 自定义右侧按钮，默认是`arrow` |
