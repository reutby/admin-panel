import Vue from 'vue'
import router from '@/router'
import { computed } from '@vue/composition-api'
import { api } from '@/services/api'
import { IAuthStore } from './types/auth-store'
import { IUser } from './types/user'
import { ITokenPayload } from './types/token-payload'

export const authStore = Vue.observable<IAuthStore>({
  user: null,
  isLoaded: false,
  userPromise: null,
  refreshTokenPromise: null
})

const setPayload = (payload) => {
  localStorage.setItem('refresh_token', payload.refreshToken)
  api.defaults.headers.common['authorization'] = 'Bearer ' + payload.token
}

const isAdmin = () => !!(authStore.user?.roles.includes('admin'))

export const useIsAdmin = () => {
  return computed(isAdmin)
}

export const logout = () => {
  localStorage.removeItem('refresh_token')
  api.defaults.headers.common['authorization'] = null
  authStore.user = null
  router.push({ name: 'login' })
}

export const fetchAuthUser = async () => {
  if (authStore.user) {
    return authStore.userPromise
  }

  try {
    const { data: user } = await api.get<IUser>('/api/me')
    if (user?.roles.find(role => role === 'admin' || role === 'editor')) {
      authStore.user = user
      return user
    } else {
      throw new Error('user is not authorized')
    }
  } catch (err) {
    logout()
  } finally {
    authStore.isLoaded = true
  }
}

export const login = async ({ email, password }: { email: string, password: string }) => {
  const { data: { payload } } = await api.post<{ payload: ITokenPayload }>('/api/signin', {
    email,
    password,
    roles: ['admin', 'editor']
  })
  setPayload(payload)
  authStore.user = payload.user
}

export const refreshToken = () => {
  if (authStore.refreshTokenPromise) {
    return authStore.refreshTokenPromise
  }
  authStore.refreshTokenPromise = api.post<{ payload: ITokenPayload }>('/api/token/refresh',
    null,
    {
      headers: {
        'authorization': 'Bearer ' + localStorage.refresh_token
      }
    })
    .then(res => res.status !== 200 ? Promise.reject(res) : res)
    .then(res => res.data ? res.data.payload : {})
    .then(payload => {
      setPayload(payload)
      authStore.refreshTokenPromise = null
    })
  return authStore.refreshTokenPromise
}
