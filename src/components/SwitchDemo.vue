<template>
  <div class="switchdemo">
    <h2>Switch 组件示例</h2>
    <section>
      <h3>{{ SwitchDemo1.__sourceCodeTitle }}</h3>
      <div class="component">
        <component :is="SwitchDemo1" />
      </div>
      <div class="actions">
        <Button>查看代码</Button>
      </div>
      <div class="code">
        <pre>{{ SwitchDemo1.__sourceCode }}</pre>
      </div>
    </section>
    <section>
      <h3>{{ SwitchDemo2.__sourceCodeTitle }}</h3>
      <div class="component">
        <component :is="SwitchDemo2" />
      </div>
      <div class="actions">
        <Button>查看代码</Button>
      </div>
      <div class="code">
        <pre>{{ SwitchDemo2.__sourceCode }}</pre>
      </div>
    </section>
    <h2>API</h2>
    <section>
      <h3>props 设置</h3>
      <table>
        <thead>
          <tr>
            <th>属性</th>
            <th>类型</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>checked</td>
            <td>Boolean</td>
            <td>设置是否选中，支持 v-model</td>
          </tr>
        </tbody>
      </table>
      <p>另：支持原生 button 元素的所有属性。</p>
    </section>
  </div>
</template>

<script lang="ts">
import SwitchDemo1 from './switch/SwitchDemo1.vue';
import SwitchDemo2 from './switch/SwitchDemo2.vue';
import Button from '../lib/Button.vue';

export default {
  components: {
    Button,
  },
  setup() {
    console.log({ main1: SwitchDemo1.__sourceCode });
    return { SwitchDemo1, SwitchDemo2 };
  },
};
</script>

<style lang="scss">
.switchdemo {
  h2 {
    margin-bottom: 24px;
  }

  section {
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
}
</style>
