import EmptyRoute from '../core/components/layout/EmptyRoute.vue'
import StorageList from './StorageList'
import AddStorage from './AddStorage'
import EditStorage from './EditStorage'

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
