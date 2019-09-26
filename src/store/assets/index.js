import { ASSETS_STATE, ASSETS_MODULE_NAME } from './consts'
import { actions } from './actions'
import { mutations } from './mutations'

export const assetsModule = {
  namespaced: true,
  name: ASSETS_MODULE_NAME,
  state: {
    [ASSETS_STATE.STORAGE_LIST]: []
  },
  actions,
  mutations
}
