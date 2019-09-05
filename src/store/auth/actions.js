import axios from 'axios'
import {AUTH_ACTIONS, AUTH_MUTATIONS} from './consts'

export const actions = {
  [AUTH_ACTIONS.LOGIN]({commit}, data) {
    axios.post('http://localhost:3000/api/signin', data)
      .then(res => res.data ? res.data.payload : {})
      .then(payload => {
        localStorage.setItem('access_token', payload.token)
        localStorage.setItem('refresh_token', payload.refreshToken)
        commit(AUTH_MUTATIONS.SET_USER, payload.user)
      });
  }
}
