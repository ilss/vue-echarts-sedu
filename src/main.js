import Vue from 'vue';
import App from './App.vue';
import seduEcharts from './lib/';
Vue.config.productionTip = false; // 设置为 false 以阻止 vue 在启动时生成生产提示

Vue.use(seduEcharts);
new Vue({
  el: '#app',
  render: h => h(App),
});
