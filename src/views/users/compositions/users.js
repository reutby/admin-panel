import { computed } from '@vue/composition-api'
import store from '../../../store'
import { USERS_ACTIONS, USERS_MODULE_NAME, USERS_STATE } from '../../../store/users/consts'

function dispatch (action, payload) {
  return store.dispatch(USERS_MODULE_NAME + '/' + action, payload)
}

function fromState (prop) {
  return store.state[USERS_MODULE_NAME][prop]
}

export function useEditUsers (userId) {
  dispatch(USERS_ACTIONS.FETCH_USER, userId)

  return {
    user: computed(() => fromState(USERS_STATE.CURRENT_USER)),
    updateUser: (payload) => dispatch(USERS_ACTIONS.UPDATE_CURRENT_USER, payload)
  }
}

export function useUsersList () {
  dispatch(USERS_ACTIONS.FETCH_USERS)

  return {
    users: computed(() => fromState(USERS_STATE.USERS))
  }
}
