import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import axios  from 'axios';
import Qs from 'qs';
import 'element-ui/lib/theme-chalk/index.css';
import GridManager from 'gridmanager-vue';
import 'gridmanager-vue/css/gm-vue.css';
Vue.use(GridManager);
Vue.use(ElementUI);
Vue.prototype.$http =axios;//设置axios为全局；
Vue.prototype.$qs =Qs;//设置qs位全局，分离formData数据
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
