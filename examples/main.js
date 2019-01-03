import Vue from 'vue'
import App from './App.vue'
import XUI from '../packages/index'
Vue.use(XUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')