import EmptyRoute from '../components/layout/EmptyRoute.vue'
import StorageList from '../views/assets/StorageList'
import AddStorage from '../views/assets/AddStorage'

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
      path: 'new',
      name: 'addStorage',
      component: AddStorage
    },
    {
      path: ':storageId',
      name: 'editStorage',
      component: EmptyRoute
    }
  ]
}

export default assetsRoutes
