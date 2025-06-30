import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// 创建 Vue 应用并挂载路由
createApp(App).use(router).mount('#app')
