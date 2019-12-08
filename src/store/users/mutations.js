import { USERS_STATE, USERS_MUTATIONS } from './consts'

export const mutations = {
  [USERS_MUTATIONS.SET_USERS]: (state, list) => state[USERS_STATE.USERS] = list,
  [USERS_MUTATIONS.SET_CURRENT_USER]: (state, user) => state[USERS_STATE.CURRENT_USER] = user
}
