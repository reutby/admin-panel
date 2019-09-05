import {AUTH_TATE, AUTH_MODULE_NAME} from './consts';
import {actions} from './actions';
import {mutations} from './mutations';

export const authModule = {
  namespaced: true,
  name: AUTH_MODULE_NAME,

  state: {
    [AUTH_TATE.USER]: null,
  },
  actions,
  mutations,
};
