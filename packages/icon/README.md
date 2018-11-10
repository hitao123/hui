## Icon 图标

### 使用指南

```javascript
import { Icon } from 'hui';

Vue.use(Icon);
```

### 代码演示

#### 基础用法

设置name属性为对应的图标名称即可，所有可用的图标名称见右侧列表

```html
<h-icon name="wechat"></h-icon>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| name | 图标名称 | `String` | `-` |
| color | 图标颜色 | `String` | `inherit` |
| size | 图标大小，如 20px 2em | `String` | `inherit` |
| classPrefix | 类名前缀 | `String` | `h-icon` |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|-------------|
| click | 点击图标是触发 | `-` |
