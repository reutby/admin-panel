import { MENUS_STATE, MENUS_MUTATIONS } from './consts'

export const mutations = {
  [MENUS_MUTATIONS.SET_MENUS]: (state, list) => state[MENUS_STATE.MENUS] = list,
  [MENUS_MUTATIONS.SET_CURRENT_MENU]: (state, menu) => state[MENUS_STATE.CURRENT_MENU] = menu,
  [MENUS_MUTATIONS.SET_UPDATED_LINKS]: (state, links) => state[MENUS_STATE.UPDATED_LINKS] = links
}
