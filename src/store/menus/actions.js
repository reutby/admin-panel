import { MENUS_ACTIONS, MENUS_GETTERS, MENUS_MUTATIONS, MENUS_STATE } from './consts'
import api from '../../services/api'

export const actions = {
  [MENUS_ACTIONS.FETCH_MENUS] ({ commit }) {
    return api.withData.get('/api/menus')
      .then(menus => {
        return commit(MENUS_MUTATIONS.SET_MENUS, menus)
      })
  },
  [MENUS_ACTIONS.FETCH_MENU] ({ commit }, name) {
    commit(MENUS_MUTATIONS.SET_UPDATED_LINKS, null)
    commit(MENUS_MUTATIONS.SET_CURRENT_MENU, null)
    return api.withData.get('/api/menus/' + name)
      .then(menu => {
        return commit(MENUS_MUTATIONS.SET_CURRENT_MENU, menu)
      })
  },
  [MENUS_ACTIONS.UPDATE_MENU_LINKS] ({ commit }, links) {
    commit(MENUS_MUTATIONS.SET_UPDATED_LINKS, links)
  },
  [MENUS_ACTIONS.UPDATE_CURRENT_MENU] ({ commit, state, getters }) {
    return api.withData.put(
      '/api/menus/' + state[MENUS_STATE.CURRENT_MENU].name,
      { ...state[MENUS_STATE.CURRENT_MENU], links: getters[MENUS_GETTERS.CURRENT_MENU_LINKS] })
      .then(menu => commit(MENUS_MUTATIONS.SET_CURRENT_MENU, menu))
  }
}
