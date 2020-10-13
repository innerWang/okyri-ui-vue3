<template>
  <button :class="{ checked }" @click="toggle"><span></span></button>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  setup(props, context) {
    const toggle = () => {
      context.emit('change', !props.checked);
    };
    return { toggle };
  },
  props: {
    checked: Boolean,
  },
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
$primary-color: blue;
$grey-color: grey;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: $grey-color;
  border-radius: $h / 2;
  position: relative;
  cursor: pointer;
  > span {
    position: absolute;
    width: $h2;
    height: $h2;
    left: 2px;
    top: 2px;
    border-radius: 50%;
    background: #fff;
    transition: left 0.25s;
  }

  &:focus {
    outline: none;
  }

  &.checked {
    background: $primary-color;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
}
</style>
