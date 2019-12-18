import { POSTS_STATE, POSTS_MODULE_NAME } from './consts'
import { actions } from './actions'
import { mutations } from './mutations'

export const postsModule = {
  namespaced: true,
  name: POSTS_MODULE_NAME,

  state: {
    [POSTS_STATE.POSTS]: [],
    [POSTS_STATE.CURRENT_POST]: null,
    [POSTS_STATE.SUBMITTING]: false,
  },
  actions,
  mutations
}
