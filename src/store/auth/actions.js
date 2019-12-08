import { AUTH_ACTIONS, AUTH_MUTATIONS, AUTH_STATE } from './consts'
import api from '../../plugins/api'
import router from '../../router'

export const actions = {
  [AUTH_ACTIONS.FETCH_USER] ({ commit, dispatch, state }) {
    if (state[AUTH_STATE.USER]) return
    if (localStorage.access_token) {
      return api.get('/api/me').then(res => {
        const user = res.data || {}
        if (user.roles.find(role => role === 'admin' || role === 'editor')) {
          commit(AUTH_MUTATIONS.SET_USER, res.data)
          return user
        } else {
          return dispatch(AUTH_ACTIONS.LOGOUT)
        }
      })
    }
  },
  [AUTH_ACTIONS.LOGIN] ({ commit }, { email, password }) {
    return api.post('/api/signin', {
      email,
      password,
      roles: ['admin', 'editor']
    })
      .then(res => res.data ? res.data.payload : {})
      .then(payload => {
        localStorage.setItem('access_token', payload.token)
        localStorage.setItem('refresh_token', payload.refreshToken)
        return commit(AUTH_MUTATIONS.SET_USER, payload.user)
      })
  },
  [AUTH_ACTIONS.REFRESH_TOKEN] ({ commit, state }) {
    if (!state[AUTH_STATE.REFRESH_TOKEN_CALL]) {
      commit(AUTH_MUTATIONS.SET_REFRESH_TOKEN_CALL,
        api.post('/api/token/refresh',
          null,
          {
            headers: {
              'authorization': 'Bearer ' + localStorage.refresh_token
            }
          })
          .then(res => res.status !== 200 ? Promise.reject(res) : res)
          .then(res => res.data ? res.data.payload : {})
          .then(payload => {
            localStorage.setItem('access_token', payload.token)
            localStorage.setItem('refresh_token', payload.refreshToken)
            api.defaults.headers.common['authorization'] = 'Bearer ' + payload.token
            commit(AUTH_MUTATIONS.SET_REFRESH_TOKEN_CALL, null)
          })
      )
    }
    return state[AUTH_STATE.REFRESH_TOKEN_CALL]
  },
  [AUTH_ACTIONS.LOGOUT] ({ commit }) {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    commit(AUTH_MUTATIONS.SET_USER, null)
    router.push({ name: 'login' })
  }
}
