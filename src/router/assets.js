import EmptyRoute from '../modules/core/components/layout/EmptyRoute.vue'
import StorageList from '../modules/assets/StorageList'
import AddStorage from '../modules/assets/AddStorage'
import EditStorage from '../modules/assets/EditStorage'

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
      component: EditStorage
    }
  ]
}

export default assetsRoutes
