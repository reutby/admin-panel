import { CATEGORIES_STATE, CATEGORIES_MUTATIONS } from './consts'

export const mutations = {
  [CATEGORIES_MUTATIONS.SET_CATEGORIES]: (state, list) => {
    state[CATEGORIES_STATE.CATEGORIES] = list
    state[CATEGORIES_STATE.CATEGORIES_LOADED] = !!list
  },
  [CATEGORIES_MUTATIONS.SET_CURRENT_CATEGORY]: (state, category) => state[CATEGORIES_STATE.CURRENT_CATEGORY] = category
}
