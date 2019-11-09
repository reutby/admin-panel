import { USERS_STATE, USERS_MODULE_NAME } from './consts'
import { actions } from './actions'
import { mutations } from './mutations'

export const usersModule = {
  namespaced: true,
  name: USERS_MODULE_NAME,

  state: {
    [USERS_STATE.USERS]: [],
    [USERS_STATE.CURRENT_USER]: null
  },
  actions,
  mutations
}
