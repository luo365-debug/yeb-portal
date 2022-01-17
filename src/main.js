//程序入口
import Vue from 'vue'
import App from './App.vue'
import router from './router'
//npm i element-ui -S
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//关闭浏览器控制台对环境的提示
Vue.config.productionTip = false
//正式安装
Vue.use(ElementUI);

//实例化
new Vue({
  //路由
  router,
  //用于渲染app的组件——>template style标签
  render: h => h(App)
  //  手动挂载
}).$mount('#app')
