<template>
  <div class="tabsdemo">
    <h2>Tabs 组件示例</h2>
    <Basedemo :comp="TabsDemo1" />
    <h2>API</h2>
    <h3>Props</h3>
    <Baseproptable :data="data" />
  </div>
</template>
<script lang="ts">
import TabsDemo1 from './tabs/TabsDemo1.vue';

import Basedemo from './BaseDemo.vue';
import Baseproptable from './BaseProps.vue';

export default {
  components: { Basedemo, Baseproptable },
  setup() {
    const data = [
      {
        prop: 'selected',
        key: 'selected',
        type: 'string',
        description:
          '设置选中哪个 tab，使用 Tab 组件的 title 来匹配，支持 v-model',
      },
    ];
    return { TabsDemo1, data };
  },
};
</script>
<style lang="scss">
.tabsdemo {
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
