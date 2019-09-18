import { CATEGORIES_STATE, CATEGORIES_MODULE_NAME } from './consts'
import { actions } from './actions'
import { mutations } from './mutations'

export const categoriesModule = {
  namespaced: true,
  name: CATEGORIES_MODULE_NAME,

  state: {
    [CATEGORIES_STATE.CATEGORIES]: [],
    [CATEGORIES_STATE.CURRENT_CATEGORY]: null
  },
  actions,
  mutations
}
