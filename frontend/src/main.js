import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
/*import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuelidate from 'vuelidate'*/

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App).use( router, Vuelidate).mount('#app')
