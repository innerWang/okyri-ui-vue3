<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from 'vue';
export default {
  name: 'App',
  setup() {
    const screenWidth = document.documentElement.clientWidth;
    const collapse = ref(screenWidth <= 500);
    provide('collapse', collapse);
  },
};
</script>
