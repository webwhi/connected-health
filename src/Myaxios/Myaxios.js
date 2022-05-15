import axios from 'axios'
const Myaxios = axios.create({
  timeout: 4000
})
Myaxios.interceptors.request.use(request => {
  return request
})
Myaxios.interceptors.response.use(success => {
  return Promise.resolve(success)
}, fail => {
  return Promise.reject(fail)
})
export default Myaxios
