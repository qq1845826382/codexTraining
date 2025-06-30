<script setup>
import { ref } from 'vue'

// 设备列表，本示例数据写死，实际应从接口获取
const devices = ref([
  { name: '显微镜', status: '正常' },
  { name: '离心机', status: '维护中' },
])
</script>

<template>
  <div>
    <h2>设备管理</h2>
    <table border="1" cellpadding="5">
      <tr>
        <th>设备名称</th>
        <th>状态</th>
      </tr>
      <tr v-for="(device, index) in devices" :key="index">
        <td>{{ device.name }}</td>
        <td>{{ device.status }}</td>
      </tr>
    </table>
  </div>
</template>
