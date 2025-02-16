import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from '@/stores/userStore'
import router from '@/router'

// 1 - 创建axios实例
const http = axios.create({
  // 基地址
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  // 超时时间
  timeout: 5000
})

// 2 - axios请求拦截器
// 一般会进行token身份验证等
http.interceptors.request.use(config => {
  // 从pinia获取token数据
  const userStore = useUserStore()
  // 按照后端的要求拼接token数据
  const token = userStore.userInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// 3 - axios响应式拦截器
http.interceptors.response.use(res => res.data, e => {
  /* router 未正确初始化：
  const router = useRouter()
  在拦截器中使用的 router 是通过 useRouter() 获取的，但拦截器是全局的，而 useRouter() 只能在 Vue 组件的 setup 函数或生命周期钩子中使用。
  如果在拦截器中直接调用 useRouter()，可能会导致 router 未正确初始化。 */
  const userStore = useUserStore()
  // 统一错误提示
  console.log('======================', e.response)
  ElMessage({
    type: 'warning',
    message: e.response.data.message
  })
  // 401token失效处理
  if (e.response.status === 401) {
    userStore.clearuserInfo()
    router.push({ path: '/login' })
  }

  return Promise.reject(e)
})


// // 一般进行错误的统一提示，token失效的处理等
// http.interceptors.response.use(  
//   response => {  
//     // 对响应数据做点什么  
//     return response.data;  
//   },  
//   error => {  
//     if (error.response) {  
//       // 请求已发出，服务器也响应了状态码，但状态码不在 2xx 范围内  
//       switch (error.response.status) {  
//         case 401:  
//           // 未授权，清除 token、跳转到登录页等  
//           break;  
//         case 404:  
//           // 请求的资源不存在  
//           break;  
//         // 其他状态码...  
//       }  
//       return Promise.reject(error.response);  
//     }  

//     // 处理网络错误等  
//     return Promise.reject(error.message || 'Error');  
//   }  
// );


export default http