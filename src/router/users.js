import EmptyRoute from '../components/layout/EmptyRoute.vue'
import Users from '../views/users/Users'
import EditUser from '../views/users/EditUser'

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
      component: EditUser
    }
  ]
}

export default usersRoutes
