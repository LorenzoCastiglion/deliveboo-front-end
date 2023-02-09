import { createApp } from 'vue'
import { router } from './router';
import App from './App.vue';
import VueTheMask from 'vue-the-mask'
import './assets/fonts/Mona-Sans.woff2';



import './assets/styles/main.scss'

createApp(App)
  .use(router)
  .use(VueTheMask)
  .mount('#app')