import { MENUS_ACTIONS, MENUS_MUTATIONS } from './consts'
import api from '../../plugins/api'

export const actions = {
  [MENUS_ACTIONS.FETCH_MENUS] ({ commit }) {
    return api.get('/api/menus')
      .then(res => res.data)
      .then(menus => {
        return commit(MENUS_MUTATIONS.SET_MENUS, menus)
      })
  },
  [MENUS_ACTIONS.FETCH_MENU] ({ commit }, name) {
    return api.get('/api/menus/' + name)
      .then(res => res.data)
      .then(menu => {
        return commit(MENUS_MUTATIONS.SET_CURRENT_MENU, menu)
      })
  }
}
