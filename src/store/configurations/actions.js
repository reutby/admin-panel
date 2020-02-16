import api from '../../plugins/api'
import { CONFIGURATIONS_ACTIONS, CONFIGURATIONS_MUTATIONS, CONFIGURATIONS_STATE } from './consts'

export const actions = {
  [CONFIGURATIONS_ACTIONS.FETCH_CONFIGURATIONS] ({ commit, state }) {
    if (state[CONFIGURATIONS_STATE.CONFIGURATIONS_LOADED]) {
      return Promise.resolve()
    }
    return api.withData.get('/api/configurations').then(configurations => {
      return commit(CONFIGURATIONS_MUTATIONS.SET_CONFIGURATIONS, configurations)
    })
  },
  [CONFIGURATIONS_ACTIONS.FETCH_CONFIGURATION] ({ commit }, key) {
    commit(CONFIGURATIONS_MUTATIONS.SET_CURRENT_CONFIGURATION, null)
    return api.withData.get('/api/configurations/' + key)
      .then(configuration => {
        return commit(CONFIGURATIONS_MUTATIONS.SET_CURRENT_CONFIGURATION, configuration)
      })
  },
  [CONFIGURATIONS_ACTIONS.UPDATE_CURRENT_CONFIGURATION] ({ commit, state }, configuration) {
    return api.withData.put(
      '/api/configurations/' + state[CONFIGURATIONS_STATE.CURRENT_CONFIGURATION].key,
      configuration)
      .then(configuration => {
        commit(CONFIGURATIONS_MUTATIONS.SET_CURRENT_CONFIGURATION, configuration)
        commit(CONFIGURATIONS_MUTATIONS.SET_CONFIGURATIONS, null)
        return configuration
      })
  }
}
