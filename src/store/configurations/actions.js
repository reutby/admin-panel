import { CONFIGURATIONS_ACTIONS, CONFIGURATIONS_MUTATIONS, CONFIGURATIONS_STATE } from './consts'
import configurationsService from '@/services/configurations-service.ts'

export const actions = {
  [CONFIGURATIONS_ACTIONS.FETCH_CONFIGURATIONS]({ commit, state }) {
    if (state[CONFIGURATIONS_STATE.CONFIGURATIONS_LOADED] || state[CONFIGURATIONS_STATE.CONFIGURATIONS_LOADING]) {
      return Promise.resolve()
    }
    commit(CONFIGURATIONS_MUTATIONS.SET_CONFIGURATION_LOADING, true)
    return configurationsService.getAll().then(configurations => {
      commit(CONFIGURATIONS_MUTATIONS.SET_CONFIGURATION_LOADING, false)
      return commit(CONFIGURATIONS_MUTATIONS.SET_CONFIGURATIONS, configurations)
    })
  },
  [CONFIGURATIONS_ACTIONS.FETCH_CONFIGURATION]({ commit, state }, key) {
    if (state[CONFIGURATIONS_STATE.PROMISES][key]) {
      return state[CONFIGURATIONS_STATE.PROMISES][key]
    }
    commit(CONFIGURATIONS_MUTATIONS.SET_CURRENT_CONFIGURATION, null)
    return commit(CONFIGURATIONS_MUTATIONS.SET_PROMISES, {
      key,
      promise: configurationsService.getOne(key)
        .then(configuration => {
          return commit(CONFIGURATIONS_MUTATIONS.SET_CURRENT_CONFIGURATION, configuration)
        })
    })
  },
  [CONFIGURATIONS_ACTIONS.UPDATE_CURRENT_CONFIGURATION]({ commit, state }, configuration) {
    return configurationsService.update(state[CONFIGURATIONS_STATE.CURRENT_CONFIGURATION].key, configuration)
      .then(configuration => {
        commit(CONFIGURATIONS_MUTATIONS.SET_CURRENT_CONFIGURATION, configuration)
        commit(CONFIGURATIONS_MUTATIONS.SET_CONFIGURATIONS, null)
        return configuration
      })
  }
}
