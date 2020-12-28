<template>
  <div class="home">
    <div class="top">
      <Topnav />
      <div class="banner">
        <h1>OKYRI UI</h1>
        <h2>基于 Vue3 的 UI 框架</h2>
        <p class="actions">
          <a href="https://github.com/innerWang/okyri-ui-vue3" target="_blank"
            >Github</a
          >
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg class="icon">
            <use xlink:href="#i-vue"></use>
          </svg>
          <h3>Vue3</h3>
          <p>源码使用 Vue3 的 Composition API</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#i-ts"></use>
          </svg>
          <h3>Typescript</h3>
          <p>源码使用 Typescript</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#i-bulb"></use>
          </svg>
          <h3>代码易读</h3>
          <p>简洁的实现，便于理解</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue';
export default {
  components: { Topnav },
};
</script>
<style lang="scss" scoped>
.home {
  .top {
    background: linear-gradient(135deg, #ffe7ca 0%, #ecedcf 100%);
    clip-path: ellipse(80% 60% at 50% 40%);
  }
  .banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > h1 {
      color: #fd5975;
      font-weight: 600;
      font-size: 44px;
    }
    > h2 {
      margin: 16px 12px;
      color: #fd6a2e;
    }
    > .actions {
      padding: 8px 0;
      a {
        $h: 50px;
        margin: 0 8px;
        padding: 0 32px;
        background: #f16079;
        color: #fff;
        display: inline-block;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        &:hover {
          text-decoration: none;
        }
      }
    }
  }

  .features {
    margin: 64px auto;
    width: 1200px;

    > ul {
      display: flex;
      flex-wrap: wrap;

      li {
        width: 400px;
        margin: 16px 0;
        display: grid;
        place-content: space-between start;
        grid-template-columns: 80px auto;
        grid-template-rows: 1fr auto;
        grid-template-areas:
          'icon title'
          'icon text';

        > svg {
          grid-area: icon;
          width: 64px;
          height: 64px;
        }

        > h3 {
          grid-area: title;
          font-size: 32px;
        }

        > p {
          grid-area: text;
        }
      }
    }

    @media (max-width: 1199px) {
      width: 800px;
    }

    @media (max-width: 799px) {
      width: 400px;
    }

    @media (max-width: 400px) {
      width: 300px;
      > ul > li {
        width: 300px;
        grid-template-columns: 58px auto;

        > svg {
          width: 48px;
          height: 48px;
        }

        > h3 {
          font-size: 24px;
        }
        > p {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
