<docs>
  一句话显示模态窗
</docs>

<template>
  <Button @click="showDialog">open dialog</Button>
</template>

<script lang="ts">
import { h } from 'vue';
import Button from '../../lib/Button.vue';
import { openDialog } from '../../lib/openDialog';
export default {
  components: {
    Button,
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: () => h('strong', 'title'),
        content: () => '内容',
      });
    };
    return { showDialog };
  },
};
</script>

<style></style>
