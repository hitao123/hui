# HandWriting 手写板

### 使用指南

``` javascript
import { HandWriting } from 'hui';

Vue.use(HandWriting);
```

### 代码演示

#### 基本用法

```javascript
  <h-hand-writing @delete="handleClick"></h-hand-writing>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| id | canvas id | `String` | - |
| action | 动作 | `String` | - |
| message | 内容 | `String` | - |
| confirm-text | 确认文案 | `String` |  `确认` |

### Event

| 事件 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| delete | 点击时触发 | - |
