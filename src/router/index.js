import { createRouter, createWebHashHistory } from 'vue-router';
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () =>
        import(
          /* webpackChunkName: "login" */ '../views/login.vue'
        )
    }
  ]
})
export default router;