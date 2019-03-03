## Loading 加载

### 使用指南

``` javascript
import { Loading } from 'hui';

Vue.use(Loading);
```

### 代码演示

#### Circular

```html
<h-loading />
<h-loading color="white" />
```

#### Spinner

```html
<h-loading type="spinner" />
<h-loading type="spinner" color="white" />
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| color | 颜色 | `String` | `#c9c9c9` |
| type | 类型，可选值为 `spinner` | `String` | `circular` |
| size | 大小 | `String` | `30px` |
