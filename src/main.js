import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Vue from 'vue'

import '../node_modules/axios/dist/axios.min'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './assets/main.css'

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// library.add(faHatWizard);
// Vue.component('font-awesome-icon', FontAwesomeIcon);


const app = createApp(App)

app.use(router)

app.mount('#app')
