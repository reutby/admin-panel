import { CONFIGURATIONS_STATE, CONFIGURATIONS_MODULE_NAME } from './consts'
import { actions } from './actions'
import { mutations } from './mutations'

export const configurationsModule = {
  namespaced: true,
  name: CONFIGURATIONS_MODULE_NAME,

  state: {
    [CONFIGURATIONS_STATE.CONFIGURATIONS]: [],
    [CONFIGURATIONS_STATE.CURRENT_CONFIGURATION]: null,
    [CONFIGURATIONS_STATE.CONFIGURATIONS_LOADING]: false,
    [CONFIGURATIONS_STATE.CONFIGURATIONS_LOADED]: false,
    [CONFIGURATIONS_STATE.PROMISES]: {}
  },
  actions,
  mutations
}
