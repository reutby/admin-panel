import { computed } from '@vue/composition-api'
import store from '../../../store'
import {
  CONFIGURATIONS_ACTIONS,
  CONFIGURATIONS_MODULE_NAME,
  CONFIGURATIONS_STATE
} from '../../../store/configurations/consts'

function dispatch(action, payload) {
  return store.dispatch(CONFIGURATIONS_MODULE_NAME + '/' + action, payload)
}

export function useConfigurationsList() {
  dispatch(CONFIGURATIONS_ACTIONS.FETCH_CONFIGURATIONS)
  return {
    list: computed(() => store.state[CONFIGURATIONS_MODULE_NAME][CONFIGURATIONS_STATE.CONFIGURATIONS])
  }
}

export function useConfiguration(key = 'app-configuration') {
  dispatch(CONFIGURATIONS_ACTIONS.FETCH_CONFIGURATION, key)
  return {
    config: computed(() => store.state[CONFIGURATIONS_MODULE_NAME][CONFIGURATIONS_STATE.CURRENT_CONFIGURATION])
  }
}

export function useEditConfiguration(key) {
  return {
    ...useConfiguration(key),
    updateConfiguration: (payload) => dispatch(CONFIGURATIONS_ACTIONS.UPDATE_CURRENT_CONFIGURATION, payload)
  }
}
