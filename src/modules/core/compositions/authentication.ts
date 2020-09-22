import { computed, reactive } from '@vue/composition-api'
import { api } from '@/services/api'
import { authStore, fetchAuthUser, login, logout, refreshToken } from '@/modules/core/store/auth'

function interceptAuthenticatedRequests() {
  api.interceptors.response.use(null as any, err => {
    if (err.response.status === 401) {
      if (err.config.url.includes('api/token/refresh')) {
        return
      }
      return refreshToken()
        .then(
          () => api.request({
            ...err.config,
            headers: undefined
          }),
          () => logout())
    }
  })
}

export function useAuthenticatedIntercept() {
  interceptAuthenticatedRequests()
  const isLoaded = computed(() => authStore.isLoaded)

  fetchAuthUser()

  return {
    isLoaded
  }
}

export function useLogin() {
  const form = reactive({ email: '', password: '' })
  return {
    form,
    login: () => {
      return login({ email: form.email, password: form.password })
    },
    isLoggedIn: computed(() => !!authStore.user)
  }
}

export function useAuth() {
  return {
    logout,
    user: computed(() => authStore.user)
  }
}
