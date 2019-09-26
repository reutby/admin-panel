import { ASSETS_ACTIONS, ASSETS_MUTATIONS } from './consts'
import api from '../../plugins/api'

export const actions = {
  [ASSETS_ACTIONS.FETCH_STORAGE_LIST] ({ commit }) {
    return api.get('/api/assets')
      .then(res => res.data)
      .then(list => {
        return commit(ASSETS_MUTATIONS.SET_STORAGE_LIST, list)
      })
  },
  [ASSETS_ACTIONS.CREATE_STORAGE] ({ commit }, { kind, name, authentication }) {
    return api.post('/api/assets', { kind, name, authentication })
      .then(res => res.data)
      .then(storage => {
        return commit(ASSETS_MUTATIONS.SET_STORAGE_LIST, [storage])
      })
  }
}
