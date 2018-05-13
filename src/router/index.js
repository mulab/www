import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home';
import About from '@/views/about';
import Members from '@/views/members';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/members',
      name: 'members',
      component: Members
    }
  ],
});
