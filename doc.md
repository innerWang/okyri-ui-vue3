### 起步和设置

1. 全局安装 yarn global add create-vite-app
2. 创建项目 cva <projectName>

### 疑难解答

1. 找不到模块 xxx.vue 的解决方法
   原因： typescript 只能理解 .ts 文件，无法理解 .vue 文件
   方法： 添加.d.ts 描述文件

2. 总是提示一些 vue3 相对于 vue2 不支持的语法错误
   关闭 vetur 的对于 template 的检查，关了也很奇怪，没有了对 template 的提示····最后直接升级 vscode 版本

3. 对 props 加了 validator 后，从 setup 中解析时，就会提示 "Property 'theme' does not exist on type 'Readonly<{ [x: number]: string; }..."
   删掉所有的 validator 就好了，何解？？

4. 使用了 v-model 双向绑定 visible 变量后，会自动有一个 onUpdate:visible 事件，然后 emit('update:visible', val)就可以，但是此时若自定义事件，将自定义事件写在 emits 中，触发双向绑定的事件后就会抛警告，难道说定义了 emits 就必须把双向绑定的事件也定义一遍吗？

   > Component emitted event "update:visible" but it is neither declared in the emits option nor as an "onUpdate:visible" prop.
   > 但是这个告警好像不影响。看看后续是否需要提个问题单，提醒他们消除一下

源码抛错地址：https://github.com/vuejs/vue-next/blob/3532b2b0213268a285cacce9b38f806e6af29a61/packages/runtime-core/src/componentEmits.ts

```js
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['ok', 'cancel'],
  setup(props, context) {
    const close = () => {
      context.emit('update:visible', false);
    };
    return { close };
  },
};
```

### 简介

1. vue2 和 vue3 的区别

- vue3 的 template 支持多个根标签，vue2 不支持
- vue3 使用 createApp(createApp 的参数是一个组件)， vue2 使用 new Vue({ ... })

### 知识点

1. vue 会默认把给组件绑定的所有属性绑定到组件内部的根元素，若不需要，则可以设置 inheritAttrs 为 false.
2. 可以使用 `$attrs` 或者在 setup 中使用 `context.attrs` 获取所有属性
3. 使用 `v-bind="$attrs"` 批量绑定属性
4. 使用 `const {size, ...rest} = context.attrs` 分离属性
5. props 和 attrs 区别？
   小提示，通过 `{...proxyInstance}` 可以打印出一个 Proxy 示例的值。可以通过在 setup 中打印两者的值进行对比。
   - props 需要在组件内部声明，才可以取值，attrs 不需要，只要给组件绑定了，就可以取值
   - props 中无法声明事件对应的回调函数，attrs 中可以获取(只要给组件绑定了)
   - props 如果没声明某个属性，则自动会跑到 attrs 中，即可以理解为 props+attrs = 组件所有的属性
   - props 可以有多种类型，attrs 的属性只有 string 这一种类型
6. UI 库 css 的注意事项
   - 不可以使用 scoped 或者 css-module，需要输出稳定不变的 class 选择器方便使用者覆盖
   - 必须加前缀，不然很容易被使用者覆盖
   - css 最小影响原则，css 不可以影响库用户的 css
7. `:visible="x"` 和 `@update:visible="x = $event"` 同时出现在一个组件时，可以直接写为 `v-modle:visible="x"`双向绑定的形式，此时 vue 会自己把 `v-model` 转换为绑定变量和监听事件的形式。
   - 原理： vue3.0 中，自定义组件上的 `v-model` 相当于传递了 `modelValue` prop 并接收抛出的 `update:modelValue` 事件。如此一个组件上可以多次使用 v-model 实现多个双向绑定。
8. 使用内置的 `TelePort` 组件可以控制在 DOM 中哪个父节点下呈现 HTML
9. 如何在运行时确认子组件的类型？
   - 检查 context.slots.default() 数组的每一项元素的 type 属性是否等于子组件
10. 使用 `watchEffect` 会立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数。
    - 注意 watchEffect 第一次是在 mounted 之前执行，如果需要在 watchEffect 中获取 DOM，则可以将其在 onMounted 内部执行
    - vue3 正式版将 watchEffect 的执行时机默认放到了渲染前，可以通过传入 options 来修改执行时机，[参考](https://vue3js.cn/docs/zh/guide/reactivity-computed-watchers.html#%E5%89%AF%E4%BD%9C%E7%94%A8%E5%88%B7%E6%96%B0%E6%97%B6%E6%9C%BA)
    - 参考 https://composition-api.vuejs.org/api.html#watcheffect
11. 使用 Typescript 泛型指定元素类型，这样就可以访问 DOM 元素对应的属性和方法
    - const indicator = ref<HTMLDivElement>(null)
12. 使用 ele.getBoundingClientRect() 获取元素宽高

### 其他

1. Dribbble.com 上可以搜索 website ，可以查看对应的设计
2. vite 没有使用 webpack，主要使用浏览器原生的 ES module (利用浏览器去解析 imports 然后按需编译返回，不会打包)和 rollup（production 模式）。但是浏览器仅支持 js，不支持导入 markdown 文件并解析，需要修改 vite 来支持。

   - 参考： https://medium.com/@axwdev/writing-a-vite-plugin-for-vue-3-5bcc1c0915e0
   - vite 的几个概念：
     - dev server：现代浏览器可以将 js 通过 ES module 的方式导入，其他类型的文件则不行，一旦浏览器检测到一个 import 语句，会先交给 vite 的 dev server 进行处理。导入的文件可以是 javascript、vue、css 及任何类型的文件(只要你告诉 vite 怎么处理它)。vite 通过这个方式解除了浏览器的限制，因此也十分有用。
     - rollup production bundle：对于静态内容，vite 会使用 rollup 进行打包。
     - vue custom block transformation：有时候一些第三方库会让你往 vue 文件中添加一些自定义块，如`<docs>` 或 `<story>`，vite 可以指定如何处理这些块。

3. vite 提供了类似 vue-loader 的 [custom blocks](https://github.com/vitejs/vite#custom-blocks) 功能，该功能可以在 vue 文件中自定义语言块，若要在 vite 中使用该功能，需要通过 `vite.config.ts`的 `vueCustomBlockTransforms` 选项来为自定义块指定转换函数。

4. 低版本的 node.js 不支持的高级语法，可选的解决方案有两种：
   - 使用旧语法，如使用 require 替换 import 等
   - 使用 esbuild 自动把 TS 转义为旧语法，此时需要文件为 .ts 文件，vite 会自动处理
5. rollup 打包只会对代码进行静态分析，对于使用`import()`**动态异步**加载的代码 rollup 无法识别。
   - tip1：各种导入方式的区别
     - commonJS 的 require 导入是**动态同步**加载，是值拷贝，需要代码运行时才可以计算完成，无法 TreeShaking。
     - ES6 的 模块 import 导入是**静态同步**加载，是值引用，运行前就可以解析完依赖，可以 Treeshaking 优化。
     - import() 导入语法是**动态异步**加载，无法 Treeshaking。
6. 如何高亮源代码？？
   - 使用 prismjs 和 v-html
7. 默认的 vite 配置文件路径位于： packages/vite/src/node/config.ts
8. github pages 不识别下划线对应的路径：原因在于 github pages 的 jekyll 模版会忽略下划线开头的文件。
9. 使用实验特性 [script setup](https://github.com/vuejs/rfcs/blob/sfc-improvements/active-rfcs/0000-sfc-script-setup.md)
10. 使用 [defineComponent](https://vue3js.cn/docs/zh/api/global-api.html#definecomponent)
11. vue-codemod 可以帮助自动从 vue2 过渡到 vue3
