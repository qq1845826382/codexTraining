// 路由配置文件
// 负责定义各个页面与路径的对应关系
import { createRouter, createWebHashHistory } from 'vue-router'
import LabList from './components/LabList.vue'
import DeviceManagement from './components/DeviceManagement.vue'

const routes = [
  { path: '/', redirect: '/labs' },
  { path: '/labs', component: LabList },
  { path: '/devices', component: DeviceManagement },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
