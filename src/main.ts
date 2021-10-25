import Vue from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from '@/routes';
import store from '@/store/index';
import './assets/css/app.scss';
import App from '@/App.vue';
import DashboardLayout from './layouts/DashboardLayout.vue';
import DefaultLayout from './layouts/DefaultLayout.vue';
import AuthLayout from './layouts/AuthLayout.vue';

Vue.use(Antd);
Vue.config.productionTip = false

// Adding template layouts to the vue components.
Vue.component("layout-auth", AuthLayout);
Vue.component("layout-dashboard", DashboardLayout);
Vue.component("layout-default", DefaultLayout);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

