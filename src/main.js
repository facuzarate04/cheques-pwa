import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueCookies from 'vue-cookies'
import axios from 'axios';
import endpoints from './api/endpoints'
import './assets/tailwind.css'

const app = createApp(App);

app.use(router)
.mount('#app')

/* Axios config */
app.config.globalProperties.axios = axios;
app.config.globalProperties.axiosConfig = {
    headers: { Authorization: `Bearer ${VueCookies.get('token')}` }
};

/* Api Endpoints */
app.config.globalProperties.apiEndpoints = endpoints;

/* Cookies */
app.config.globalProperties.cookies = VueCookies
    



