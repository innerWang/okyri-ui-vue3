<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from 'vue';
export default {
  name: 'App',
  setup() {
    const collapse = ref(true);
    provide('collapse', collapse);
  },
};
</script>
