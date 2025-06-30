<script setup>
import { ref, onMounted } from 'vue'
import { fetchLabs, addLab } from '../api/labApi'

// 实验室列表数据
const labs = ref([])

// 表单字段
const newLab = ref({
  name: '',
  manager: '',
})

// 初始化时获取实验室数据
onMounted(async () => {
  labs.value = await fetchLabs()
})

// 提交新增实验室
async function submit() {
  await addLab(newLab.value)
  // 此处暂时直接添加到本地列表
  labs.value.push({ ...newLab.value })
  newLab.value.name = ''
  newLab.value.manager = ''
}
</script>

<template>
  <div>
    <h2>实验室列表</h2>
    <table border="1" cellpadding="5">
      <tr>
        <th>实验室名称</th>
        <th>负责人</th>
      </tr>
      <tr v-for="(lab, index) in labs" :key="index">
        <td>{{ lab.name }}</td>
        <td>{{ lab.manager }}</td>
      </tr>
    </table>

    <h3>新增实验室</h3>
    <div>
      <label>名称：<input v-model="newLab.name" /></label>
      <label>负责人：<input v-model="newLab.manager" /></label>
      <button @click="submit">提交</button>
    </div>
  </div>
</template>
