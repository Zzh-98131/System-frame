// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import Layout from './components/layout/Layout.vue'
import router from './router'
import Cookies from 'js-cookie'
import store from './store'
import i18n from './lang/index' // internationalization
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import '../theme/index.css' // 引入自定义橙色主题
import './assets/icons'
import '@/assets/styles/index.scss'

Vue.prototype.$cookie = Cookies
Vue.config.productionTip = false
Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
