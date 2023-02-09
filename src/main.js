import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueCookies from 'vue-cookies'
import axios from 'axios';
import endpoints from './api/endpoints'

const app = createApp(App);

app.use(router)
.use(VueCookies)
.mount('#app')

app.config.globalProperties.axios = axios;
app.config.globalProperties.ApiEndpoints = endpoints;
    



