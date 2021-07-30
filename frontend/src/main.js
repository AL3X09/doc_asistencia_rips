import Vue from 'vue'
import App from './App.vue'
import router from './route'
import { BootstrapVue, IconsPlugin , ButtonPlugin , AlertPlugin  } from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(AlertPlugin)
Vue.use(ButtonPlugin )
Vue.use(Vuelidate)
Vue.use(VueAxios, axios)

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
