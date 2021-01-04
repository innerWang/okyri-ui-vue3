<docs>
  常规用法
</docs>

<template>
  <Switch v-model:checked="checked" />
</template>

<script>
import { Switch } from '../../lib';
import { ref } from 'vue';
export default {
  components: {
    Switch,
  },
  setup() {
    const checked = ref(true);
    return { checked };
  },
};
</script>
