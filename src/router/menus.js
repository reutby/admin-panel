import Menus from '../sections/menus/Menus.vue'
import EditMenu from '../sections/menus/EditMenu.vue'
import EmptyRoute from '../sections/core/components/layout/EmptyRoute.vue'

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
