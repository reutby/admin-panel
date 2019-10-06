import { POSTS_STATE, POSTS_MUTATIONS } from './consts'

export const mutations = {
  [POSTS_MUTATIONS.SET_POSTS]: (state, list) => state[POSTS_STATE.POSTS] = list,
  [POSTS_MUTATIONS.SET_CURRENT_POST]: (state, post) => state[POSTS_STATE.CURRENT_POST] = post,
}
