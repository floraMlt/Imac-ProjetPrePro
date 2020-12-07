import { createApp } from 'vue'
import Vuesax from 'vuesax'

import App from './App.vue'
import router from './router'


import 'vuesax/dist/vuesax.css' //Vuesax styles
createApp(App).use(router, Vuesax).mount('#app')

//createApp(App).use(router).mount('#app')
