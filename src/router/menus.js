import Menus from '../views/menus/Menus.vue'
import EditMenu from '../views/menus/EditMenu.vue'
import EmptyRoute from '../components/layout/EmptyRoute.vue'

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
