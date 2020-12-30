<template>
  <div class="basedemo">
    <h3>{{ comp.__sourceCodeTitle }}</h3>
    <div class="component">
      <component :is="comp" />
    </div>
    <div class="actions">
      <Button @click="toggle">查看代码</Button>
    </div>
    <div class="code" v-if="visible">
      <pre class="language-html" v-html="html" />
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import 'prismjs';
import 'prismjs/themes/prism.css';
import { ref } from 'vue';

const Prism = (window as any).Prism;

export default {
  props: {
    comp: Object,
  },
  components: { Button },
  setup(props) {
    const html = Prism.highlight(
      props.comp.__sourceCode,
      Prism.languages.html,
      'html',
    );
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    return { html, visible, toggle };
  },
};
</script>

<style lang="scss">
.basedemo {
  margin-bottom: 16px;
  padding: 16px;
  box-shadow: 0 0 3px rgba($color: #000000, $alpha: 0.3);

  > * {
    margin-bottom: 12px;
  }

  .code {
    padding: 16px 16px 8px;
    border-top: 1px dashed #d9d9d9;
    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>
