<template>
  <div class="switchdemo">
    <h2>Switch 组件示例</h2>
    <Basedemo :comp="SwitchDemo1" />
    <Basedemo :comp="SwitchDemo2" />
    <h2>API</h2>
    <h3>Props</h3>
    <Baseproptable :data="data" />
    <p>另：支持原生 button 元素的所有属性。</p>
  </div>
</template>

<script lang="ts">
import SwitchDemo1 from './switch/SwitchDemo1.vue';
import SwitchDemo2 from './switch/SwitchDemo2.vue';
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
        prop: 'checked',
        key: 'checked',
        type: 'boolean',
        description: '设置是否选中，支持 v-model',
      },
    ];
    return { SwitchDemo1, SwitchDemo2, data };
  },
};
</script>

<style lang="scss">
.switchdemo {
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
