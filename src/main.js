// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'lib-flexible'
import $axios from './uilts/index'
import { Cell } from 'mint-ui';
import { Header } from 'mint-ui';
import { Field } from 'mint-ui';
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);
Vue.component(Field.name, Field);
Vue.component(Header.name, Header);
Vue.component(Cell.name, Cell);

Vue.prototype.$axios = $axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
