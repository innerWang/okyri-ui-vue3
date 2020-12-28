<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#i-global"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li><router-link to="/">主页</router-link></li>
      <li><router-link to="/doc"> 文档</router-link></li>
    </ul>
    <span v-if="toggleIconVisible" class="toggleIcon" @click="toggleCollapse" />
  </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue';
export default {
  props: {
    toggleIconVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const collapse = inject<Ref<boolean>>('collapse');
    const toggleCollapse = () => {
      collapse.value = !collapse.value;
    };
    return { toggleCollapse };
  },
};
</script>
<style lang="scss" scoped>
.topnav {
  display: flex;
  padding: 16px;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  color: #fd5975;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    svg {
      height: 32px;
      width: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }

  .toggleIcon {
    display: none;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: #f00;
    cursor: pointer;
  }

  @media (max-width: 500px) {
    > .logo {
      margin: 0 auto;
    }
    > .menu {
      display: none;
    }
    > .toggleIcon {
      display: inline-block;
    }
  }
}
</style>
