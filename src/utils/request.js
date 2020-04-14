
import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://127.0.0.1:8000', // process.env.VUE_APP_URL, // api的base_url
  timeout: 300000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    // toast = Toast.loading();
    console.log('拦截request')
    return config
  },
  error => {
    return Promise.reject(error);
  }
)

// respone拦截器
service.interceptors.response.use(
  // console.log('响应', response)
  response => {
    if (response.data.errorCode === 0) {
      console.log('响应response')

      // toast.clear();
    }
    return response
  },
  error => {
    // toast.clear();
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
