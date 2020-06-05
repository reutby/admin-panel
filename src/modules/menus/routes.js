import Menus from './Menus.vue'
import EditMenu from './EditMenu.vue'
import EmptyRoute from '../core/components/layout/EmptyRoute.vue'

const menusRoutes = {
  path: 'menus',
  redirect: { name: 'menus' },
  component: EmptyRoute,
  children: [
    {
      path: '',
      name: 'menus',
      component: Menus
    },
    {
      path: ':menuName',
      name: 'editMenu',
      component: EditMenu
    }
  ]
}

export default menusRoutes
