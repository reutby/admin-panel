import { computed } from '@vue/composition-api'
import store from '../../../store'
import {
  CONFIGURATIONS_ACTIONS,
  CONFIGURATIONS_MODULE_NAME,
  CONFIGURATIONS_STATE
} from '../../../store/configurations/consts'

function dispatch (action) {
  return store.dispatch(CONFIGURATIONS_MODULE_NAME + '/' + action)
}

export function useConfigurationsList () {
  dispatch(CONFIGURATIONS_ACTIONS.FETCH_CONFIGURATIONS)
  return {
    list: computed(() => store.state[CONFIGURATIONS_MODULE_NAME][CONFIGURATIONS_STATE.CONFIGURATIONS])
  }
}
