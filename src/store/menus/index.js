import { MENUS_STATE, MENUS_MODULE_NAME } from './consts'
import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'

export const menusModule = {
  namespaced: true,
  name: MENUS_MODULE_NAME,

  state: {
    [MENUS_STATE.MENUS]: [],
    [MENUS_STATE.CURRENT_MENU]: null,
    [MENUS_STATE.UPDATED_LINKS]: null
  },
  actions,
  mutations,
  getters
}
