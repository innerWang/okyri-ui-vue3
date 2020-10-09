<template>
  <div class="topnav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li><router-link to="/">主页</router-link></li>
      <li><router-link to="/doc"> 文档</router-link></li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
$color: #007974;
.topnav {
  color: $color;
  display: flex;
  padding: 16px;
  width: 100%;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>
