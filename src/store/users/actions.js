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
      .then(user => {
        return commit(USERS_MUTATIONS.SET_CURRENT_USER, user)
      })
  },
  [USERS_ACTIONS.REMOVE_USER] ({ commit, state }, userId) {
    commit(USERS_MUTATIONS.SET_CURRENT_USER, null)
    return api.delete('/api/users/' + userId)
      .then(() => {
        const list = state[USERS_STATE.USERS] || []
        return commit(USERS_MUTATIONS.SET_USERS, list.filter(user => user._id !== userId))
      })
  },
  [USERS_ACTIONS.UPDATE_CURRENT_USER] ({ commit, state }, updatedData) {
    return api.withData.put(
      '/api/users/' + state[USERS_STATE.CURRENT_USER]._id,
      updatedData)
      .then(user => commit(USERS_MUTATIONS.SET_CURRENT_USER, user))
  },
  [USERS_ACTIONS.CREATE_USER] ({ commit, state }, data) {
    return api.withData.post('/api/users', data)
      .then(user => {
        commit(USERS_MUTATIONS.SET_CURRENT_USER, user)
        return user
      })
  }
}
