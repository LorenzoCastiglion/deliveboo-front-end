import { createApp } from 'vue'
import { router } from './router';
import App from './App.vue';
import './assets/fonts/Mona-Sans.woff2';



import './assets/styles/main.scss'

createApp(App)
  .use(router)
  .mount('#app')