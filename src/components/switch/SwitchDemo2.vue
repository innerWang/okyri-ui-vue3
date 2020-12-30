<docs>
  支持 disabled
</docs>

<template>
  <Switch v-model:checked="checked" disabled />
</template>

<script>
import Switch from '../../lib/Switch.vue';
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
