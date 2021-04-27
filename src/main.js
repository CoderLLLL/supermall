import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from './components/common/toast'
import VueLazyLoad from 'vue-lazyload'

import FastClick from 'fastclick'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue();
//解决移动端点击延迟300ms
FastClick.attach(document.body)
//实现图片懒加载
Vue.use(VueLazyLoad,{
  loading: require('./assets/img/common/placeholder.png')
})

Vue.use(Toast);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
