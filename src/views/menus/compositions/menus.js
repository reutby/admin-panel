import { computed } from '@vue/composition-api'
import store from '../../../store'
import { MENUS_ACTIONS, MENUS_GETTERS, MENUS_MODULE_NAME, MENUS_STATE } from '../../../store/menus/consts'

function dispatch (action, payload) {
  return store.dispatch(MENUS_MODULE_NAME + '/' + action, payload)
}

function getter (getter) {
  return store.getters[MENUS_MODULE_NAME + '/' + getter]
}

export function useMenuOperations (menuName) {
  dispatch(MENUS_ACTIONS.FETCH_MENU, menuName)

  const links = computed(() => getter(MENUS_GETTERS.CURRENT_MENU_LINKS))

  return {
    links,
    updateLink: (link) => {
      dispatch(
        MENUS_ACTIONS.UPDATE_MENU_LINKS,
        links.value.map(l => l._id === link._id ? link : l)
      )
    },
    removeLink: (link) => {
      dispatch(
        MENUS_ACTIONS.UPDATE_MENU_LINKS,
        links.value.filter(l => l !== link)
      )
    },
    addLink: (link) => {
      dispatch(
        MENUS_ACTIONS.UPDATE_MENU_LINKS,
        [...links.value, { kind: 'category' }]
      )
    },
    updateMenu: () => dispatch(MENUS_ACTIONS.UPDATE_CURRENT_MENU)
  }
}

export function useMenusList () {
  dispatch(MENUS_ACTIONS.FETCH_MENUS)
  return {
    menus: computed(() => store.state[MENUS_MODULE_NAME][MENUS_STATE.MENUS])
  }
}
