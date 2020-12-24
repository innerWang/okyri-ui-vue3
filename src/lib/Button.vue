<template>
  <button class="okyri-button" :class="classes" :disabled="disabled">
    <span class="okyri-loading-indicator" v-if="loading" />
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from 'vue';
export default {
  // 设置为false代表不继承给组件根元素绑定组件的props
  // inheritAttrs: false,
  props: {
    size: String,
    theme: String,
    level: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const { theme, size, level } = props;
    const classes = computed(() => {
      const ret = [];
      if (theme && ['link', 'text'].indexOf(theme) !== -1) {
        ret.push(`okyri-theme-${theme}`);
      }
      if (size && ['big', 'small'].indexOf(size) !== -1) {
        ret.push(`okyri-size-${size}`);
      }
      if (level && ['main', 'danger'].indexOf(level) !== -1) {
        ret.push(`okyri-level-${level}`);
      }
      return ret;
    });
    return { classes };
  },
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
.okyri-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out($color: #000000, $amount: 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.okyri-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.okyri-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(#fff, 5%);
    }
  }
  &.okyri-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.okyri-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.okyri-level-main {
    background: $blue;
    color: white;
    border-color: $blue;
    &:hover,
    &:focus {
      background: darken($blue, 10%);
      border-color: darken($blue, 10%);
    }
  }
  &.okyri-level-danger {
    background: $red;
    border-color: $red;
    color: white;
    &:hover,
    &:focus {
      background: darken($red, 10%);
      border-color: darken($red, 10%);
    }
  }

  &.okyri-theme-link {
    &.okyri-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.okyri-theme-text {
    &.okyri-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.okyri-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &[disabled] {
    cursor: not-allowed;
    color: $grey;
    background: lighten($grey, 35%);
    &:hover {
      border-color: $grey;
    }
  }

  &.okyri-theme-link,
  &.okyri-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .okyri-loading-indicator {
    width: 12px;
    height: 12px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 50%;
    border: 1px solid transparent;
    border-top-color: darken($blue, 10%);
    animation: okyri-spin 1s infinite linear;
  }
}
@keyframes okyri-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
