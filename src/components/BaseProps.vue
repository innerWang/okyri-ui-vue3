<template>
  <table class="basepropstable">
    <thead class="header">
      <tr>
        <th>属性</th>
        <th>类型</th>
        <th>描述</th>
      </tr>
    </thead>
    <tbody class="body">
      <tr v-for="item in data" :key="item.key">
        <td>{{ item.prop }}</td>
        <td>{{ item.type }}</td>
        <td>{{ item.description }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.basepropstable {
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  border-spacing: 0;

  thead > tr {
    background: #f3f3f3;
    > th {
      padding: 16px;
      border-bottom: 1px solid #e3e3e3;
    }
  }

  tbody > tr > td {
    padding: 12px;
    border-bottom: 1px solid #e3e3e3;
  }
}
</style>
