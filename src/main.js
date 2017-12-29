import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import router from './router';
import { Form } from 'bootstrap-vue/es/components';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueScrollTo from 'vue-scrollto';

Vue.use(Form);
Vue.use(BootstrapVue);
Vue.use(VueScrollTo);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
