import Menus from '../modules/menus/Menus.vue'
import EditMenu from '../modules/menus/EditMenu.vue'
import EmptyRoute from '../modules/core/components/layout/EmptyRoute.vue'

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
