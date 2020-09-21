import Menus from './Menus.vue'
import EditMenu from './EditMenu.vue'
import EmptyRoute from '../core/components/layout/EmptyRoute.vue'
import { RouteConfig } from 'vue-router'

const menusRoutes: RouteConfig = {
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
      path: 'new',
      name: 'createMenu',
      component: EditMenu
    },
    {
      path: ':menuName',
      name: 'editMenu',
      component: EditMenu
    }
  ]
}

export default menusRoutes
