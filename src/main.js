import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* 树形结构的插件以及样式的引入 */
import Vue2OrgTree from 'vue2-org-tree'
import 'vue2-org-tree/dist/style.css'


/* 引入时间的插件laydate组件库 */
import 'jquery'
import './common/laydate/laydate.js'
import './common/js/layui/layui.all.js'
import './common/js/layui/css/layui.css'
import './common/js/layui/css/modules/laydate/default/laydate.css'
import './common/js/layui/css/modules/layer/default/layer.css'
Vue.use(Vue2OrgTree)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
