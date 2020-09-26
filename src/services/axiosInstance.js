import axios from 'axios'
import NProgress from 'nprogress'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 60000
})

apiClient.interceptors.request.use(config => {
  NProgress.start()
  return config
})


export default apiClient
