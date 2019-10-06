import Vue from 'vue'
import Router from 'vue-router'
import Authenticated from '../views/Authenticated.vue'
import Home from '../views/Home.vue'
import Posts from '../views/posts/Posts.vue'
import Users from '../views/Users.vue'
import Login from '../views/Login.vue'
import Configurations from '../views/Configurations.vue'
import menusRoutes from './menus'
import categoriesRoutes from './categories'
import assetsRoutes from './assets'

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
        {
          path: '/configurations',
          name: 'configurations',
          component: Configurations
        },
        menusRoutes,
        categoriesRoutes,
        assetsRoutes,
        {
          path: '/posts',
          name: 'posts',
          component: Posts
        },
        {
          path: '/users',
          name: 'users',
          component: Users
        }
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
  if (to.meta.guest || localStorage.access_token) {
    return next()
  }
  next({
    name: 'login'
  })
})

export default router
