import { MENUS_STATE, MENUS_MODULE_NAME } from './consts'
import { actions } from './actions'
import { mutations } from './mutations'

export const menusModule = {
  namespaced: true,
  name: MENUS_MODULE_NAME,

  state: {
    [MENUS_STATE.MENUS]: [],
    [MENUS_STATE.CURRENT_MENU]: null
  },
  actions,
  mutations
}
