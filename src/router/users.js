import EmptyRoute from '../components/layout/EmptyRoute.vue'
import Users from '../views/Users'

const usersRoutes = {
  path: 'users',
  redirect: { name: 'users' },
  component: EmptyRoute,
  children: [
    {
      path: '',
      name: 'users',
      component: Users
    },
    {
      path: 'new',
      name: 'createUser',
      component: EmptyRoute
    },
    {
      path: ':userId',
      name: 'editUser',
      component: EmptyRoute
    }
  ]
}

export default usersRoutes
