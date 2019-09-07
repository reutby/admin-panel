import { AUTH_ACTIONS, AUTH_MUTATIONS } from './consts'
import api from '../../plugins/api'

export const actions = {
	[AUTH_ACTIONS.LOGIN] ({ commit }, data) {
		return api.post( '/api/signin', data)
			.then(res => res.data ? res.data.payload : {})
			.then(payload => {
				localStorage.setItem('access_token', payload.token)
				localStorage.setItem('refresh_token', payload.refreshToken)
				return commit(AUTH_MUTATIONS.SET_USER, payload.user)
			})
	},
	[AUTH_ACTIONS.LOGOUT] ({ commit }) {
		localStorage.removeItem('access_token')
		localStorage.removeItem('refresh_token')
		return commit(AUTH_MUTATIONS.SET_USER, null)
	}
}
