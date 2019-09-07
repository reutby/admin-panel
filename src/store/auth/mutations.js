import { AUTH_MUTATIONS, AUTH_TATE } from './consts'

export const mutations = {
  [AUTH_MUTATIONS.SET_USER]: (state, user) => state[AUTH_TATE.USER] = user
}
