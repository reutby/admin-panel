import EmptyRoute from '../components/layout/EmptyRoute.vue'
import StorageList from '../views/assets/StorageList'

const assetsRoutes = {
  path: 'assets',
  redirect: { name: 'storageList' },
  component: EmptyRoute,
  children: [
    {
      path: '',
      name: 'storageList',
      component: StorageList
    },
    {
      path: 'create',
      name: 'createCategory',
      component: EmptyRoute
    },
    {
      path: ':categoryId',
      name: 'editCategory',
      component: EmptyRoute
    }
  ]
}

export default assetsRoutes
