// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'sanitize.css/sanitize.css';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import {
  Row,
  Col,
  Button,
} from 'element-ui';

import App from './App';
import router from './router';

Vue.use(Button);
Vue.use(Row);
Vue.use(Col);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
