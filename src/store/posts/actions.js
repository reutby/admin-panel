import { POSTS_ACTIONS, POSTS_MUTATIONS, POSTS_STATE } from './consts'
import api from '../../plugins/api'

export const actions = {
  [POSTS_ACTIONS.FETCH_POSTS] ({ commit }) {
    return api.withData.get('/api/posts', { params: { populate: ['categories'] } })
      .then(list => {
        return commit(POSTS_MUTATIONS.SET_POSTS, list)
      })
  },
  [POSTS_ACTIONS.FETCH_POST] ({ commit }, postId) {
    commit(POSTS_MUTATIONS.SET_CURRENT_POST, null)
    return api.withData.get('/api/posts/' + postId)
      .then(post => {
        return commit(POSTS_MUTATIONS.SET_CURRENT_POST, post)
      })
  },
  [POSTS_ACTIONS.UPDATE_CURRENT_POST] ({ commit, state }, updatedData) {
    return api.withData.put(
      '/api/posts/' + state[POSTS_STATE.CURRENT_POST]._id,
      updatedData)
      .then(post => commit(POSTS_MUTATIONS.SET_CURRENT_POST, post))
  }
}
