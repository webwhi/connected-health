import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import './assets/element/global.css'
import ElementUI from 'element-ui'
import './assets/element/index.css'
import 'element-ui/lib/theme-chalk/display.css'
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
