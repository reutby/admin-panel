import { ASSETS_STATE, ASSETS_MUTATIONS } from './consts'

export const mutations = {
  [ASSETS_MUTATIONS.SET_STORAGE_LIST]: (state, list) => state[ASSETS_STATE.STORAGE_LIST] = list
}
