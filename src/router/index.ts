import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import Register from '@/views/Register.vue';
import NewLead from '@/views/NewLead.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/new-lead',
    name: 'NewLead',
    component: NewLead,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
