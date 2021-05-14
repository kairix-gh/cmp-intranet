import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/style.css'

import store from "@/store/store"

const app = createApp(App);

app.provide("store", store);

app.use(router).mount('#app')