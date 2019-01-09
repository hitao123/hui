# image-preview 手写板

### 使用指南

``` javascript
import { ImagePreview } from 'hui';

```

### 代码演示

#### 基本用法

```javascript
  const instance = ImagePreview([
    'https://img.yzcdn.cn/upload_files/2017/03/15/FkubrzN7AgGwLlTeb1E89-T_ZjBg.png',
    'https://img.yzcdn.cn/upload_files/2017/03/14/FmTPs0SeyQaAOSK1rRe1sL8RcwSY.jpeg',
    'https://img.yzcdn.cn/upload_files/2017/03/15/FvexrWlG_WxtCE9Omo5l27n_mAG_.jpeg'
  ]);
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
