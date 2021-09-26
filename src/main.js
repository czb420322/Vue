import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* 树形结构的插件以及样式的引入 */
import Vue2OrgTree from 'vue2-org-tree'
import 'vue2-org-tree/dist/style.css'

Vue.use(Vue2OrgTree)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
