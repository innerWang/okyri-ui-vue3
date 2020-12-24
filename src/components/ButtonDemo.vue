<template>
  <h1>示例1</h1>
  <Button>按钮</Button>
  <Button theme="link">link</Button>
  <Button theme="text">text</Button>
  <h1>示例2</h1>
  <Button size="big">big</Button>
  <Button size="small">small</Button>
  <Button>按钮</Button>
  <h1>示例3</h1>
  <Button level="main">main</Button>
  <Button level="danger">danger</Button>
  <Button>按钮</Button>
  <h1>示例4</h1>
  <div :style="{ background: 'red' }">
    <Button disabled>disabled</Button>
    <Button>按钮</Button>
  </div>
  <h1>示例5</h1>
  <div :style="{ background: 'red' }">
    <Button loading>loading</Button>
    <Button>按钮</Button>
  </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue';
export default {
  components: {
    Button,
  },
  setup() {
    const onClick = () => {
      console.log('你好');
    };

    const onMouseOver = () => {
      console.log('mouseover');
    };
    return { onClick, onMouseOver };
  },
};
</script>
