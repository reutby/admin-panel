import Vue from 'vue'
import Menus from '../views/menus/Menus.vue'
import EditMenu from '../views/menus/EditMenu.vue'

const EmptyRoute = Vue.extend({
  render (h) {
    return h('router-view')
  }
})

const menuRoutes = {
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

export default menuRoutes
