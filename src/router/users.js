import EmptyRoute from '../sections/core/components/layout/EmptyRoute.vue'
import Users from '../sections/users/Users'
import EditUser from '../sections/users/EditUser'
import CreateUser from '../sections/users/CreateUser'

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
