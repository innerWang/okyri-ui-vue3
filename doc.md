### 起步和设置

1. 全局安装 yarn global add create-vite-app
2. 创建项目 cva <projectName>

### 疑难解答

1. 找不到模块 xxx.vue 的解决方法
   原因： typescript 只能理解 .ts 文件，无法理解 .vue 文件
   方法： 添加.d.ts 描述文件

### 简介

1. vue2 和 vue3 的区别

- vue3 的 template 支持多个根标签，vue2 不支持
- vue3 使用 createApp(createApp 的参数是一个组件)， vue2 使用 new Vue({ ... })
