import EmptyRoute from '../modules/core/components/layout/EmptyRoute.vue'
import Users from '../modules/users/Users'
import EditUser from '../modules/users/EditUser'
import CreateUser from '../modules/users/CreateUser'

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
      component: CreateUser
    },
    {
      path: ':userId',
      name: 'editUser',
      component: EditUser
    }
  ]
}

export default usersRoutes
