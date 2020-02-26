import EmptyRoute from '../sections/core/components/layout/EmptyRoute.vue'
import StorageList from '../sections/assets/StorageList'
import AddStorage from '../sections/assets/AddStorage'

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
