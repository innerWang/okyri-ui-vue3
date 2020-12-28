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
