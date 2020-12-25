<template>
  <div class="okyri-tabs">
    <div class="okyri-tabs-nav" ref="navbar">
      <div
        class="okyri-tabs-nav-item"
        v-for="(t, idx) in titles"
        :key="idx"
        @click="changeActive(t)"
        :class="{ selected: t === selected }"
        :ref="
          (el) => {
            if (t === selected) {
              activeTab = el;
            }
          }
        "
      >
        {{ t }}
      </div>
      <div class="okyri-tabs-nav-link" ref="link" />
    </div>
    <div class="okyri-tabs-content">
      <component
        class="okyri-tabs-content-item"
        :is="current"
        :key="current.props.title"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref, watchEffect } from 'vue';
import Tab from './Tab.vue';
export default {
  props: {
    selected: String,
  },
  setup(props, context) {
    const activeTab = ref<HTMLDivElement>(null);
    const link = ref<HTMLDivElement>(null);
    const navbar = ref<HTMLDivElement>(null);

    onMounted(() => {
      // 之所以放在内部，是为了可以访问 DOM
      watchEffect(
        () => {
          const { width, left } = activeTab.value.getBoundingClientRect();
          const { left: containerLeft } = navbar.value.getBoundingClientRect();
          link.value.style.width = width + 'px';
          link.value.style.left = left - containerLeft + 'px';
        },
        {
          flush: 'post', // 注意正式版把 watcheEffect 的执行时机默认放到了执行前
        },
      );
    });

    // 获取默认插槽
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      //@ts-ignore
      if (tag.type.name !== Tab.name) {
        throw new Error('Tabs 子组件只能是 Tab');
      }
    });

    const current = computed(() => {
      return defaults.find((tag) => tag.props.title === props.selected);
    });

    const titles = defaults.map((tag) => tag.props.title);

    const changeActive = (title: string) => {
      context.emit('update:selected', title);
    };

    return {
      defaults,
      titles,
      current,
      activeTab,
      link,
      navbar,
      changeActive,
    };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.okyri-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }

    &-link {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
