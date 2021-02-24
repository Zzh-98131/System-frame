import axios from 'axios'
import qs from 'qs'
import store from '@/store'
import router from '@/router'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  baseURL: '/api_edims/', // 'http://192.168.162.219/EDIMS-WebOwner',
  // baseURL: 'http://192.168.162.30/EDIMS-WebPE',
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 10 * 1000 // request timeout
})

/* request请求拦截器==>对请求参数做处理 */
service.interceptors.request.use(

  config => {
    config.headers['token'] = getToken()
    // 逻辑优化： post时是data，headers不设置时data要qs.stringify转换，headers要设置时data不用转换。get时是params，不需要转换
    // config.method === 'post'?config.data = qs.stringify({...config.data}):config.params = {...config.params}
    if (config.method === 'post') {
      if (config.setHeadersContentType) {
        config.headers['Content-Type'] = 'application/json;charset=UTF-8'
      } else {
        config.data = qs.stringify({...config.data})
      }
    }
    if (config.method === 'get') {
      // 如果是get请求，且params是数组类型如arr=[1,2]，则转换成arr=1&arr=2
      config.paramsSerializer = function(params) {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      }
    }
    /* if(store.state.login.token && config.baseURL != 'http://58.221.7.174:10000'){
        config.headers['token'] = store.state.login.token;
    } */
    return config
},error => {
    // do something with request error
    // console.log(error) // for debug
    Promise.reject(error)
})

/* respone响应拦截器==>对响应做处理 */
service.interceptors.response.use(

  response => {
    // service status code
    const res = response.data
    // console.log(response)
    if (res.status !== 0) {
      // Message({
      //   message: res.msg || 'Error',
      //   type: 'error',
      //   duration: 3 * 1000
      // })

      // Do not block exit operations
      if (response.config.url.indexOf('loginout') !== -1) {
        return res
      }
      // to re-login
      // 'You have been logged out, you can cancel to stay on this page, or log in again'
      if (res.status === 21000) {
        // MessageBox.confirm(res.msg, 'Confirm logout', {
        //   confirmButtonText: 'Re-Login',
        //   cancelButtonText: 'Cancel',
        //   type: 'warning'
        // }).then(() => {
        //   // reset user token and reload.
        //   store.dispatch('user/resetToken').then(() => {
        //     location.reload()
        //   })
        // }).catch(() => {
        //   // store.dispatch('user/resetToken').then(() => {
        //   //   location.reload()
        //   // })
        // })

        store.dispatch('user/clearLoginToken').then(() => {
          // location.reload()
        })
        router.push({path: '/login'})

        // store.dispatch('user/resetToken').then(() => {
        //   location.reload()
        // })
      }
      return res
      // return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      // Promise.reject();
      return res
    }
  }
  ,error =>{
    console.log(error)
    return Promise.reject(error)
  }
)

export default service
