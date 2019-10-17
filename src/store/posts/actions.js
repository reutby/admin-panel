import { POSTS_ACTIONS, POSTS_MUTATIONS, POSTS_STATE } from './consts'
import api from '../../plugins/api'

export const actions = {
  [POSTS_ACTIONS.FETCH_POSTS] ({ commit }) {
    return api.get('/api/posts', { params: { populate: ['categories'] } })
      .then(res => res.data)
      .then(list => {
        return commit(POSTS_MUTATIONS.SET_POSTS, list)
      })
  },
  [POSTS_ACTIONS.FETCH_POST] ({ commit }, postId) {
    commit(POSTS_MUTATIONS.SET_CURRENT_POST, null)
    return api.get('/api/posts/' + postId)
      .then(res => res.data)
      .then(post => {
        return commit(POSTS_MUTATIONS.SET_CURRENT_POST, post)
      })
  },
  [POSTS_ACTIONS.UPDATE_CURRENT_CATEGORY] ({ commit, state }) {
    return api.put(
      '/api/posts/' + state[POSTS_STATE.CURRENT_POST]._id,
      state[POSTS_STATE.CURRENT_POST])
      .then(res => res.data)
      .then(post => commit(POSTS_MUTATIONS.SET_CURRENT_POST, post))
  }
}
