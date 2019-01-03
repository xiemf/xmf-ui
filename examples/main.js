import Vue from 'vue'
import App from './App.vue'
import XUI from '../packages/index'
import '../packages/index.less'
Vue.use(XUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')