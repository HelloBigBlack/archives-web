import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
// 引入elementui样式
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/css/default.scss";
import "./assets/css/public.scss";

Vue.config.productionTip = false;

// 引入elementui
Vue.use(ElementUI);
Vue.filter('formDate', function (value) {
  if (value) {
    return value.split('T')[0];
  }
  // 返回处理后的值
  return '';
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
