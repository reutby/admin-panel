import Vue from 'vue'
import Router from 'vue-router'
import Authenticated from './modules/core/Authenticated.vue'
import Home from './modules/core/Home.vue'
import Login from './modules/core/Login.vue'
import menusRoutes from './modules/menus/routes'
import categoriesRoutes from './modules/categories/routes'
import assetsRoutes from './modules/assets/routes'
import postsRoutes from './modules/posts/routes'
import usersRoutes from './modules/users/routes'
import configurationsRoutes from './modules/configurations/routes'
import { authStore, fetchAuthUser } from '@/modules/core/store/auth'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'authenticated',
      component: Authenticated,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        configurationsRoutes,
        menusRoutes,
        categoriesRoutes,
        assetsRoutes,
        postsRoutes,
        usersRoutes
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        guest: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === 'login' || to.meta.guest || localStorage.refresh_token) {
    return next()
  }
  fetchAuthUser()
  if (authStore.userPromise || authStore.user) {
    return next()
  }
  next({
    name: 'login'
  })
})

export default router
