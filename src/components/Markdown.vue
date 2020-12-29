<template>
  <article class="markdown-body" v-html="text"></article>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const text = ref<string>('');
    import(props.path).then((res) => {
      text.value = res.default;
    });

    return { text };
  },
};
</script>

<style></style>
