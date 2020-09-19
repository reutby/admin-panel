import { ref, computed, reactive } from '@vue/composition-api'
import { AUTH_ACTIONS, AUTH_MODULE_NAME, AUTH_STATE } from '@/store/auth/consts'
import { api } from '@/services/api'
import store from '@/store'

function dispatch(action: string, payload?: any) {
  return store.dispatch(AUTH_MODULE_NAME + '/' + action, payload)
}

function fromState(prop: string) {
  return store.state[AUTH_MODULE_NAME][prop]
}

function interceptAuthenticatedRequests() {
  api.interceptors.response.use(null as any, err => {
    if (err.response.status === 401) {
      if (err.config.url.includes('api/token/refresh')) {
        return
      }
      return dispatch(AUTH_ACTIONS.REFRESH_TOKEN)
        .then(
          () => api.request({
            ...err.config,
            headers: undefined
          }),
          () => dispatch(AUTH_ACTIONS.LOGOUT))
    }
  })
}

export function useAuthenticatedIntercept() {
  interceptAuthenticatedRequests()
  const isLoaded = ref(false)

  dispatch(AUTH_ACTIONS.FETCH_USER)
    .then(() => isLoaded.value = true)

  return {
    isLoaded
  }
}

export function useLogin() {
  const form = reactive({ email: '', password: '' })
  return {
    form,
    login: () => {
      return dispatch(AUTH_ACTIONS.LOGIN, { email: form.email, password: form.password })
    },
    isLoggedIn: computed(() => {
      return !!fromState(AUTH_STATE.USER)
    })
  }
}

export function useAuth() {
  return {
    logout: () => {
      return dispatch(AUTH_ACTIONS.LOGOUT)
    },
    user: computed(() => fromState(AUTH_STATE.USER))
  }
}
