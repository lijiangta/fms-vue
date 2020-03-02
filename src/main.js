import Vue from 'vue'
import App from './App'
import router from './router'
/*elementUI组件全部引入*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
/*引入store*/
import store from "./store"

/*作用是阻止vue 在启动时生成生产提示*/
Vue.config.productionTip = false;

/*Vue中使用外来插件elementUI*/
Vue.use(ElementUI);

// 设置反向代理，前端请求默认发送到 http://localhost:8443/api(require为es5写法)
var axios = require('axios');
axios.defaults.baseURL = 'http://localhost:8443/api';
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

//钩子函数拦截
router.beforeEach(
  (to, from, next) => {
      if (to.meta.requireAuth) {
        if (store.state.user.username) {
          next()
        } else {
          next({
                 path: 'login',
                 query: {redirect: to.fullPath}
               })
        }
      } else {
        next()
      }
    }
);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
