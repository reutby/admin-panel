import { AUTH_STATE, AUTH_MODULE_NAME } from './consts'
import { actions } from './actions'
import { mutations } from './mutations'

export const authModule = {
  namespaced: true,
  name: AUTH_MODULE_NAME,
  state: {
    [AUTH_STATE.USER]: null,
    [AUTH_STATE.REFRESH_TOKEN_CALL]: null
  },
  actions,
  mutations
}
