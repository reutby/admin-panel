import { CATEGORIES_ACTIONS, CATEGORIES_MUTATIONS, CATEGORIES_STATE } from './consts'
import api from '../../plugins/api'

export const actions = {
  [CATEGORIES_ACTIONS.FETCH_CATEGORIES] ({ commit, state }) {
    if (state[CATEGORIES_STATE.CATEGORIES_LOADED]) {
      return Promise.resolve()
    }
    return api.withData.get('/api/categories')
      .then(categories => {
        return commit(CATEGORIES_MUTATIONS.SET_CATEGORIES, categories)
      })
  },
  [CATEGORIES_ACTIONS.FETCH_CATEGORY] ({ commit }, categoryPath) {
    commit(CATEGORIES_MUTATIONS.SET_CURRENT_CATEGORY, null)
    return api.withData.get('/api/categories/' + categoryPath)
      .then(category => {
        return commit(CATEGORIES_MUTATIONS.SET_CURRENT_CATEGORY, category)
      })
  },
  [CATEGORIES_ACTIONS.CREATE_CATEGORY] ({ commit, state }, category) {
    return api.withData.post('/api/categories', category)
      .then(category => {
        commit(CATEGORIES_MUTATIONS.SET_CURRENT_CATEGORY, category)
        commit(CATEGORIES_MUTATIONS.SET_CATEGORIES, null)
        return category
      })
  },
  [CATEGORIES_ACTIONS.UPDATE_CURRENT_CATEGORY] ({ commit, state }, category) {
    return api.withData.put(
      '/api/categories/' + state[CATEGORIES_STATE.CURRENT_CATEGORY].path,
      category)
      .then(category => {
        commit(CATEGORIES_MUTATIONS.SET_CURRENT_CATEGORY, category)
        commit(CATEGORIES_MUTATIONS.SET_CATEGORIES, null)
        return category
      })
  },
  [CATEGORIES_ACTIONS.REMOVE_CATEGORY] ({ commit, state, dispatch }, category) {
    return api.withData.delete(
      '/api/categories/' + category.path,
      category)
      .then(() => {
        commit(CATEGORIES_MUTATIONS.SET_CATEGORIES, null)
        dispatch(CATEGORIES_ACTIONS.FETCH_CATEGORIES)
      })
  }
}
