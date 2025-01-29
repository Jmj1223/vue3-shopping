import axios from 'axios'
 
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
  return config
}, e => Promise.reject(e))
 
// 3 - axios响应式拦截器
// 一般进行错误的统一提示，token失效的处理等
http.interceptors.response.use(  
  response => {  
    // 对响应数据做点什么  
    return response.data;  
  },  
  error => {  
    if (error.response) {  
      // 请求已发出，服务器也响应了状态码，但状态码不在 2xx 范围内  
      switch (error.response.status) {  
        case 401:  
          // 未授权，清除 token、跳转到登录页等  
          break;  
        case 404:  
          // 请求的资源不存在  
          break;  
        // 其他状态码...  
      }  
      return Promise.reject(error.response);  
    }  
      
    // 处理网络错误等  
    return Promise.reject(error.message || 'Error');  
  }  
);
 
 
export default http