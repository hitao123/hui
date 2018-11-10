## Collapse 折叠面板

### 使用指南

``` javascript
import { Collapse, CollapseItem } from 'hui';

Vue.use(Collapse).use(CollapseItem);
```

### 代码演示

#### 基础用法

通过`v-model`控制展开的面板列表，`activeNames`为数组格式

```html
<h-collapse v-model="activeNames">
  <h-collapse-item title="测试一" name="1">
    手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一
  </h-collapse-item>
  <h-collapse-item title="测试二" name="2">
    测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三
  </h-collapse-item>
  <h-collapse-item title="测试三" name="3">
    基本用法基本用法基本用法基本用法基本用法基本用法基本用法基本用法基本用法基本用法
  </h-collapse-item>
</h-collapse>
```

```javascript
export default {
  data() {
    return {
      activeNames: ['1']
    };
  }
};
```

#### 手风琴

通过`accordion`可以设置为手风琴模式，最多展开一个面板，此时`active`为字符串格式

```html
<h-collapse v-model="active" accordion>
  <h-collapse-item title="手风琴一" name="1">
    手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一
  </h-collapse-item>
  <h-collapse-item title="手风琴二" name="2">
    基本用法基本用法基本用法基本用法基本用法基本用法基本用法基本用法基本用法基本用法
  </h-collapse-item>
  <h-collapse-item title="手风琴三" name="3">
    测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三测试三
  </h-collapse-item>
</h-collapse>
```

```javascript
export default {
  data() {
    return {
      active: '1'
    };
  }
};
```

#### 自定义标题内容

```javascript
<h-collapse v-model="active3">
  <h-collapse-item>
    <div slot="title">自定义标题<h-icon name="question" /></div>
    自定义标题内容自定义标题内容自定义标题内容自定义标题内容自定义标题内容
  </h-collapse-item >
  <h-collapse-item title="自定义二" value="内容" icon="shop">
    手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一手风琴一
  </h-collapse-item>
</h-collapse>
```

### API

#### Collapse

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| v-model | 当前展开面板的 name | `String|Number|Array` | - |
| accordion | 是否开启手风琴模式 | `Boolean` | `false` |

#### CollapseItem

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| name | 唯一标识符，默认为索引值 | `String | Number` | `index` |
| icon | 左侧图标，可选值见 Icon 组件 | `String` | - |
| title | 左侧标题 | `String | Number` | - |
| value | 右侧内容 | `String | Number` | - |
| label | 标题下方的描述信息 | `String` | - |
| border | 是否显示内边框 | `Boolean` | `true` |
| is-link | 是否展示右侧箭头并开启点击反馈 | `Boolean` | `false` |
| disabled | 是否禁用面板 | `Boolean` | `false` |

### Event

#### Collapse Event

| 事件 | 说明 | 参数 |
|-----------|-----------|-----------|-------------|
| change | 切换面板时触发 | activeNames: `string | array` | - |

#### CollapseItem Event

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| icon | 左侧图标，可选值见 Icon 组件 | `String` | - |

### Slot

#### CollapseItem Slot

| 名称 | 说明 |
|-----------|-----------|
|default| 面板内容|
|value|自定义显示内容|
|icon|自定义icon|
|title|自定义title|
|right-icon|自定义右侧按钮，默认是arrow|
