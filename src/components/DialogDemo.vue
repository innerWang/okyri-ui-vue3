<template>
  <div class="dialogdemo">
    <h2>Dialog组件示例</h2>
    <Basedemo :comp="DialogDemo1" />
    <Basedemo :comp="DialogDemo2" />
    <h2>API</h2>
    <h3>Props</h3>
    <Baseproptable :data="data" />
  </div>
</template>
<script lang="ts">
import DialogDemo1 from './dialog/DialogDemo1.vue';
import DialogDemo2 from './dialog/DialogDemo2.vue';

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
        prop: 'visible',
        key: 'visible',
        type: 'boolean',
        description: '是否可见，默认值为 false，支持 v-model',
      },
      {
        prop: 'maskClosable',
        key: 'maskClosable',
        type: 'boolean',
        description: '是否可以点击 mask 关闭模态窗，默认为 true',
      },
      {
        prop: 'ok',
        key: 'ok',
        type: 'function',
        description: '点击确认按钮的回调函数',
      },
      {
        prop: 'cancel',
        key: 'cancel',
        type: 'function',
        description: '点击取消按钮的回调函数',
      },
    ];
    return { data, DialogDemo1, DialogDemo2 };
  },
};
</script>
<style lang="scss">
.dialogdemo {
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
