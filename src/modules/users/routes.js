import EmptyRoute from '../core/components/layout/EmptyRoute.vue'
import Users from './Users'
import EditUser from './EditUser'
import CreateUser from './CreateUser'

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
