<docs>
  常规用法
</docs>

<template>
  <Dialog v-model:visible="visible" :ok="ok" :cancel="cancel">
    <template v-slot:title>
      <strong>提示</strong>
    </template>
    <template v-slot:content>
      <p>内容</p>
    </template>
  </Dialog>
  <Button @click="toggle"> open dialog</Button>
</template>

<script lang="ts">
import { ref } from 'vue';
import Dialog from '../../lib/Dialog.vue';
import Button from '../../lib/Button.vue';
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const ok = () => alert('click ok');
    const cancel = () => alert('click cancel');
    return { visible, toggle, ok, cancel };
  },
};
</script>

<style></style>
