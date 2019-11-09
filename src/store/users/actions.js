import { USERS_ACTIONS, USERS_MUTATIONS, USERS_STATE } from './consts'
import api from '../../plugins/api'

export const actions = {
  [USERS_ACTIONS.FETCH_USERS] ({ commit }) {
    return api.withData.get('/api/users')
      .then(list => {
        return commit(USERS_MUTATIONS.SET_USERS, list)
      })
  },
  [USERS_ACTIONS.FETCH_USER] ({ commit }, userId) {
    commit(USERS_MUTATIONS.SET_CURRENT_USER, null)
    return api.withData.get('/api/users/' + userId)
      .then(post => {
        return commit(USERS_MUTATIONS.SET_CURRENT_USER, post)
      })
  },
  [USERS_ACTIONS.UPDATE_CURRENT_USER] ({ commit, state }, updatedData) {
    return api.withData.put(
      '/api/users/' + state[USERS_STATE.CURRENT_USER]._id,
      updatedData)
      .then(user => commit(USERS_MUTATIONS.SET_CURRENT_USER, user))
  }
}
