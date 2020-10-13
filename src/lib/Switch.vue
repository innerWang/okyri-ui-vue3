<template>
  <button class="okyri-switch" :class="{ checked }" @click="toggle">
    <span></span>
  </button>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  setup(props, context) {
    const toggle = () => {
      context.emit('update:checked', !props.checked);
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
$primary-color: #1890ff;
$grey-color: #bfbfbf;
.okyri-switch {
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
    transition: all 0.25s;
  }

  &:focus {
    outline: none;
  }

  &:active {
    > span {
      width: $h2 + 4px;
    }
  }

  &.checked {
    background: $primary-color;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }

    &:active {
      > span {
        width: $h2 + 4px;
        margin-left: -4px;
      }
    }
  }
}
</style>
