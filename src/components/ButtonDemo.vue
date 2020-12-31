<template>
  <div class="buttondemo">
    <h2>Button 组件示例</h2>
    <Basedemo :comp="ButtonDemo1" />
    <Basedemo :comp="ButtonDemo2" />
    <Basedemo :comp="ButtonDemo3" />
    <Basedemo :comp="ButtonDemo4" />
    <Basedemo :comp="ButtonDemo5" />
    <h2>API</h2>
    <h3>Props</h3>
    <Baseproptable :data="data" />
    <p>支持原生 button 的各类事件。</p>
  </div>
</template>
<script lang="ts">
import ButtonDemo1 from './button/ButtonDemo1.vue';
import ButtonDemo2 from './button/ButtonDemo2.vue';
import ButtonDemo3 from './button/ButtonDemo3.vue';
import ButtonDemo4 from './button/ButtonDemo4.vue';
import ButtonDemo5 from './button/ButtonDemo5.vue';

import Basedemo from './BaseDemo.vue';
import Baseproptable from './BaseProps.vue';

export default {
  components: {
    Basedemo,
    Baseproptable,
  },
  setup() {
    const data = [
      {
        prop: 'theme',
        key: 'theme',
        type: 'string',
        description: '设置按钮的类型，不设置即为默认，可选值包含 link 、 text',
      },
      {
        prop: 'size',
        key: 'size',
        type: 'string',
        description: '设置按钮的尺寸，不设置即为默认，可选值包含  big 、 small',
      },
      {
        prop: 'level',
        key: 'level',
        type: 'string',
        description:
          '设置按钮的等级，不设置即为默认，可选值包含  main 、 danger',
      },
      {
        prop: 'disabled',
        key: 'disabled',
        type: 'boolean',
        description: '是否禁用按钮，默认不禁用',
      },
      {
        prop: 'loading',
        key: 'loading',
        type: 'boolean',
        description: '是否正在加载，默认不加载',
      },
    ];
    return {
      ButtonDemo1,
      ButtonDemo2,
      ButtonDemo3,
      ButtonDemo4,
      ButtonDemo5,
      data,
    };
  },
};
</script>
<style lang="scss">
.buttondemo {
  > h2 {
    margin-bottom: 24px;
  }

  > h3 {
    margin-bottom: 16px;
  }
  > p {
    margin: 12px 0;
  }
}
</style>
