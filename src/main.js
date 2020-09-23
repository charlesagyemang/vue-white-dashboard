
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './registerServiceWorker'
import ArgonDashboard from './plugins/argon-dashboard'
import Multiselect from 'vue-multiselect'
import FlatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

Vue.config.productionTip = false

Vue.component('multiselect', Multiselect)
Vue.component('flat-pickr', FlatPickr)
Vue.use(ArgonDashboard)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
