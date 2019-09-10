import { MENUS_ACTIONS, MENUS_GETTERS, MENUS_MUTATIONS, MENUS_STATE } from './consts'
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
    commit(MENUS_MUTATIONS.SET_UPDATED_LINKS, null)
    commit(MENUS_MUTATIONS.SET_CURRENT_MENU, null)
    return api.get('/api/menus/' + name)
      .then(res => res.data)
      .then(menu => {
        return commit(MENUS_MUTATIONS.SET_CURRENT_MENU, menu)
      })
  },
  [MENUS_ACTIONS.UPDATE_MENU_LINKS] ({ commit }, links) {
    commit(MENUS_MUTATIONS.SET_UPDATED_LINKS, links)
  },
  [MENUS_ACTIONS.UPDATE_CURRENT_MENU] ({ commit, state, getters }) {
    return api.put(
      '/api/menus/' + state[MENUS_STATE.CURRENT_MENU].name,
      { ...state[MENUS_STATE.CURRENT_MENU], links: getters[MENUS_GETTERS.CURRENT_MENU_LINKS] })
      .then(res => res.data)
      .then(menu => commit(MENUS_MUTATIONS.SET_CURRENT_MENU, menu))
  }
}
