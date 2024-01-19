import './assets/main.css'
import { createApp } from 'vue'
import App from '../src/App.vue'
import router from './router'
import Games from './components/Games.vue'

const app = createApp(App)

app.component('Games', Games);
console.log('Games component:', Games);

app.use(router)

app.mount('#app')
