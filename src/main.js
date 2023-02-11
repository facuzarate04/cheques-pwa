import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueCookies from 'vue-cookies'
import axios from 'axios';
import endpoints from './api/endpoints'
import './assets/tailwind.css'
import { createPinia } from 'pinia'
import { useToastStore } from './stores/toastStore.js'


const app = createApp(App);
const pinia = createPinia()

app.use(router)
    .use(pinia)
    .mount('#app')

/* Router globally */
app.config.globalProperties.router = router;

/* Axios config */
app.config.globalProperties.axios = axios;
app.config.globalProperties.axiosConfig = {
    headers: { Authorization: `Bearer ${VueCookies.get('token')}` }
};

/* Api Endpoints */
app.config.globalProperties.apiEndpoints = endpoints;

/* Cookies */
app.config.globalProperties.cookies = VueCookies

/* Pinia toast notifications */
app.config.globalProperties.toastStore = useToastStore()

export default VueCookies

    



