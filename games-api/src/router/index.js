import { createRouter, createWebHashHistory } from 'vue-router';
import Games from '../components/Games.vue';

const routes = [
  { path: '/', redirect: '/games' }, 
  { path: '/games', name: 'games', component: Games },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
