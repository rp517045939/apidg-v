// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// storage
import storage from '@/utils/storage'

Vue.config.productionTip = false
Vue.prototype.$storage = storage
Vue.use(ElementUI)
// 没有登录的跳回登录页
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    Vue.prototype.$storage.sessionRemove('username')
  }
  var user = Vue.prototype.$storage.sessionGet('username')
  if (!user && to.path !== '/login') {
    next({
      path: '/login'
    })
  } else {
    next()
  }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
