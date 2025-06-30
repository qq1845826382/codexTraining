// 实验室相关接口调用
// 此处仅提供函数定义，未实现真正的网络请求
// 真实项目中可在这里通过 axios 等库调用后端接口

export async function fetchLabs() {
  // 获取实验室列表
  // TODO: 调用后端接口获取数据
  return []
}

export async function addLab(lab) {
  // 新建实验室
  // 参数 lab 应包含实验室信息
  // TODO: 调用后端接口提交数据
  console.log('添加实验室', lab)
  return { success: true }
}
