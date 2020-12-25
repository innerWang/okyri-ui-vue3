<template>
  <div>DialogDemo</div>
  <Dialog v-model:visible="x" :ok="ok" :cancel="cancel">
    <template v-slot:title>
      <strong>提示</strong>
    </template>
    <template v-slot:content>
      <p>内容1111</p>
    </template>
  </Dialog>
  <Button @click="toggle">显示模态窗</Button>
  <Button @click="showDialog">一句话显示模态窗</Button>
</template>
<script lang="ts">
import { ref, h } from 'vue';
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import { openDialog } from '../lib/openDialog';

export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const ok = () => console.log('click ok');
    const cancel = () => console.log('click cancel');
    const showDialog = () => {
      openDialog({
        title: () => h('strong', 'title'),
        content: () => '内容',
      });
    };
    return { x, toggle, ok, cancel, showDialog };
  },
};
</script>
