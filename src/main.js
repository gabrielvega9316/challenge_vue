import './assets/main.css'
import { createStore } from 'vuex';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const store = createStore({
    // Configuración de tu store Vuex
  });
const app = createApp(App)
app.use(store);
app.use(router)

app.mount('#app')
