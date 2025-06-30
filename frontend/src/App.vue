<script setup>
// 根组件，主要负责显示导航和当前路由页面
</script>

<template>
  <div>
    <nav>
      <router-link to="/labs">实验室管理</router-link> |
      <router-link to="/devices">设备管理</router-link>
    </nav>
    <!-- router-view 渲染匹配到的组件 -->
    <router-view />
  </div>
</template>

<style scoped>
nav {
  margin-bottom: 20px;
}
nav a {
  margin-right: 10px;
  text-decoration: none;
}
</style>
