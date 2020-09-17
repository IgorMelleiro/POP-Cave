import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Fragment from 'vue-fragment';
import navbarAdmin from "@/components/NavbarAdmin";
import footervue from '@/components/Footer.vue'

Vue.component('navbarAdmin', navbarAdmin);
Vue.component('footervue', footervue);

Vue.use(Fragment.Plugin);
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
