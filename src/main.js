import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

// Création de l'application
const app = createApp(App);

// Utilisation du store
app.use(store);

// Montage de l'application dans l'élément avec l'ID 'app'
app.mount('#app');
