## Steps 步骤条

### 使用指南
``` javascript
import { Step, Steps } from 'hui';

Vue.use(Step).use(Steps);
```

### 代码演示

#### 基础用法

```html
<h-steps :active="active">
  <h-step>第一步</h-step>
  <h-step>第二步</h-step>
  <h-step>完成</h-step>
</h-steps>
```

```javascript
export default {
  data() {
    return {
      active: 1
    };
  }
}
```

#### 描述信息

通过`title`和`description`属性来定义描述信息信息

```html
<h-steps
  :active="active"
  icon="logistics"
  title="标题"
  description="描述信息"
>
  <h-step>第一步</h-step>
  <h-step>第二步</h-step>
  <h-step>完成</h-step>
</h-steps>
```

#### 竖向步骤条

可以通过设置`direction`属性来改变步骤条的显示方式

```html
<h-steps direction="vertical" :active="0" active-color="#f60">
  <h-step>
    <h3>【城市】物流状态1</h3>
    <p>2016-07-12 12:40</p>
  </h-step>
  <h-step>
    <h3>【城市】物流状态2</h3>
    <p>2016-07-11 10:00</p>
  </h-step>
  <h-step>
    <h3>快件已发货</h3>
    <p>2016-07-10 09:30</p>
  </h-step>
</h-steps>
```

### Steps API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| active | 当前步骤 | `Number` | 0 |
| title | 描述栏标题 | `String` | - |
| description | 描述栏文字 | `String` | - |
| icon | 描述栏图标 | `String` | - |
| icon-class | 图标额外类名 | `String` | - |
| direction | 显示方向，可选值为 `horizontal` `vertical` | `String` | `horizontal` |
| active-color | 激活状态颜色 | `String` | `#06bf04` |

### Steps Slot

| Name | 说明 |
|-----------|-----------|
| icon | 自定义icon区域 |
| message-extra | 状态栏添加额外的元素 |
