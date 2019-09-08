import { AUTH_STATE, AUTH_MODULE_NAME } from './consts'
import { actions } from './actions'
import { mutations } from './mutations'

export const authModule = {
  namespaced: true,
  name: AUTH_MODULE_NAME,

  state: {
    [AUTH_STATE.USER]: null
  },
  actions,
  mutations
}
