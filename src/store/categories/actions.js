import { CATEGORIES_ACTIONS, CATEGORIES_MUTATIONS, CATEGORIES_STATE } from './consts'
import api from '../../plugins/api'

export const actions = {
  [CATEGORIES_ACTIONS.FETCH_CATEGORIES] ({ commit }) {
    return api.get('/api/categories')
      .then(res => res.data)
      .then(categories => {
        return commit(CATEGORIES_MUTATIONS.SET_CATEGORIES, categories)
      })
  },
  [CATEGORIES_ACTIONS.FETCH_CATEGORY] ({ commit }, categoryId) {
    commit(CATEGORIES_MUTATIONS.SET_CURRENT_CATEGORY, null)
    return api.get('/api/categories/' + categoryId)
      .then(res => res.data)
      .then(category => {
        return commit(CATEGORIES_MUTATIONS.SET_CURRENT_CATEGORY, category)
      })
  },
  [CATEGORIES_ACTIONS.UPDATE_CURRENT_CATEGORY] ({ commit, state }) {
    return api.put(
      '/api/categories/' + state[CATEGORIES_STATE.CURRENT_CATEGORY]._id,
      state[CATEGORIES_STATE.CURRENT_CATEGORY])
      .then(res => res.data)
      .then(category => commit(CATEGORIES_MUTATIONS.SET_CURRENT_CATEGORY, category))
  }
}
