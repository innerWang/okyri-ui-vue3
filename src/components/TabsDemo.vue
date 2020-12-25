<template>
  <h2>示例1</h2>
  <Tabs v-model:selected="selected">
    <Tab title="tab1">content1</Tab>
    <Tab title="tab2">content2</Tab>
  </Tabs>
</template>
<script lang="ts">
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
import { ref } from 'vue';

export default {
  components: { Tabs, Tab },
  setup() {
    const selected = ref('tab1');
    return { selected };
  },
};
</script>
