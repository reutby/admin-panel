import { AUTH_MUTATIONS, AUTH_STATE } from './consts'

export const mutations = {
  [AUTH_MUTATIONS.SET_USER]: (state, user) => state[AUTH_STATE.USER] = user
}
