## SwitchCell 开关单元格

### 使用指南

``` javascript
import { SwitchCell } from 'hui';

Vue.use(SwitchCell);
```

### 代码演示

#### 基础用法

```html
<h-cell-group>
  <h-switch-cell v-model="checked" title="标题" />
</h-cell-group>
```

```js
export default {
  data() {
    return {
      checked: true
    }
  }
}
```

#### 禁用状态

通过disabled属性可以将组件设置为禁用状态

```html
<h-cell-group>
  <h-switch-cell v-model="checked" disabled title="标题" />
</h-cell-group>
```

#### 加载状态

通过loading属性可以将组件设置为加载状态

```html
<h-cell-group>
  <h-switch-cell v-model="checked" loading title="标题" />
</h-cell-group>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| autoplay | 自动轮播间隔，单位为 ms | `Number` | - |
| duration | 动画时长，单位为 ms | `Number` | `500` |
| loop | 是否开启循环播放 | `Boolean` | `true` |
| vertical | 是否为纵向滚动 | `Boolean` | `false` |
| touchable | 是否可以通过手势滑动 | `Boolean` | `true` |
| show-indicators | 是否显示指示器 | `Boolean` | `true` |
| initial-swipe | 初始位置，从 0 开始算 | `Number` | `0` |

### 事件

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| change | 每一页轮播结束后触发 | index, 当前页的索引 |

### 方法

通过 ref 可以获取到 swipe 实例并调用实例方法

| 方法名 | 参数 | 返回值 | 介绍 |
|-----------|-----------|-----------|-------------|
| swipeTo | index: 目标位置的索引 | void | 滚动到目标位置 |
