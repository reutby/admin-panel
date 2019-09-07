import Vue from 'vue'
import Router from 'vue-router'
import Authenticated from '../views/Authenticated.vue'
import Home from '../views/Home.vue'
import Categories from '../views/Categories.vue'
import Posts from '../views/Posts.vue'
import Users from '../views/Users.vue'
import Menus from '../views/Menus.vue'
import Login from '../views/Login.vue'

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
					path: '/menus',
					name: 'menus',
					component: Menus
				},
				{
					path: '/categories',
					name: 'categories',
					component: Categories
				},
				{
					path: '/posts',
					name: 'posts',
					component: Posts
				},
				{
					path: '/users',
					name: 'users',
					component: Users
				},
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
