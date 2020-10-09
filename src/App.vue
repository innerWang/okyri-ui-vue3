<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from 'vue';
import router from './router';
export default {
  name: 'App',
  setup() {
    const screenWidth = document.documentElement.clientWidth;
    const isMobile = screenWidth <= 500;
    const collapse = ref(isMobile);
    provide('collapse', collapse);
    router.afterEach(() => {
      if (isMobile) {
        collapse.value = true;
      }
    });
  },
};
</script>
