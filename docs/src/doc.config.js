import pkgJson from '../../package.json';

export const searchConfig = {
  apiKey: '152e16751e1d4c73051594d1c118915a',
  indexName: 'hitao123_hui'
};

export default {
  header: {
    logo: {
      title: 'Hui',
      version: pkgJson.version,
      href: '#/'
    },
    nav: {
      'Vue 组件': 'https://hitao123.github.io/hui/',
      github: 'https://github.com/hitao123/hui'
    }
  },
  nav: [
    {
      name: '开发指南',
      groups: [
        {
          list: [
            {
              path: '/intro',
              title: '介绍'
            },
            {
              path: '/quickstart',
              title: '快速上手'
            },
            {
              path: '/changelog',
              title: '更新日志'
            },
            {
              path: '/contribution',
              title: '开发指南'
            }
          ]
        }
      ]
    },
    {
      name: '组件',
      showInMobile: true,
      groups: [
        {
          groupName: '基础组件',
          list: [
            {
              path: '/col',
              title: 'Layout 布局'
            },
            {
              path: '/button',
              title: 'Button 按钮'
            },
            {
              path: '/cell',
              title: 'Cell 单元格'
            },
            {
              path: '/collapse',
              title: 'Collapse 折叠面板'
            },
            {
              path: '/icon',
              title: 'Icon 图标'
            },
            {
              path: '/lazyload',
              title: 'Lazyload 图片懒加载'
            },
            {
              path: '/list',
              title: 'List 列表'
            },
            {
              path: '/loading',
              title: 'Loading 加载'
            },
            {
              path: '/nav-bar',
              title: 'NavBar 导航栏'
            },
            {
              path: '/notice-bar',
              title: 'NoticeBar 通告栏'
            },
            {
              path: '/popup',
              title: 'Popup 弹出层'
            },
            {
              path: '/steps',
              title: 'Steps 步骤条'
            },
            {
              path: '/swipe',
              title: 'Swipe 轮播'
            },
            {
              path: '/tab',
              title: 'Tab 标签页'
            }
          ]
        },
        {
          groupName: '表单组件',
          list: [
            {
              path: '/checkbox',
              title: 'Checkbox 复选框'
            },
            {
              path: '/field',
              title: 'Field 输入框'
            },
            {
              path: '/text-mask',
              title: 'text-mask 输入框'
            },
            {
              path: '/number-keyboard',
              title: 'NumberKeyboard 数字键盘'
            },
            {
              path: '/password-input',
              title: 'PasswordInput 密码输入框'
            },
            {
              path: '/radio',
              title: 'Radio 单选框'
            },
            {
              path: '/rate',
              title: 'Rate 评分'
            },
            {
              path: '/search',
              title: 'Search 搜索'
            },
            {
              path: '/stepper',
              title: 'Stepper 步进器'
            },
            {
              path: '/switch',
              title: 'Switch 开关'
            },
            {
              path: '/uploader',
              title: 'Uploader 图片上传'
            }
          ]
        },
        {
          groupName: '操作反馈',
          list: [
            {
              path: '/actionsheet',
              title: 'Actionsheet 上拉菜单'
            },
            {
              path: '/datetime-picker',
              title: 'DatetimePicker 时间选择'
            },
            {
              path: '/dialog',
              title: 'Dialog 弹出框'
            },
            {
              path: '/picker',
              title: 'Picker 选择器'
            },
            {
              path: '/pull-refresh',
              title: 'PullRefresh 下拉刷新'
            },
            {
              path: '/toast',
              title: 'Toast 轻提示'
            }
          ]
        },
        {
          groupName: '高阶组件',
          list: [
            {
              path: '/image-preview',
              title: 'ImagePreview 图片预览'
            },
            {
              path: '/switch-cell',
              title: 'SwitchCell 开关单元格'
            },
            {
              path: '/hand-writing',
              title: 'handWriting 手写板'
            }
          ]
        }
      ]
    }
  ]
};
