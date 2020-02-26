import EmptyRoute from '../sections/core/components/layout/EmptyRoute.vue'
import Users from '../sections/users/Users'
import EditUser from '../sections/users/EditUser'

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
