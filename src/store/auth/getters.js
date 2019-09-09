import { AUTH_GETTERS, AUTH_STATE } from './consts'

export const getters = {
  [AUTH_GETTERS.IS_ADMIN]: (state) => !!(state[AUTH_STATE.USER] && state[AUTH_STATE.USER].roles.includes('admin'))
}
