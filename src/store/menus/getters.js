import { MENUS_STATE, MENUS_GETTERS } from './consts'

export const getters = {
  [MENUS_GETTERS.CURRENT_MENU_LINKS]: (state) => {
    const updatedLinks = state[MENUS_STATE.UPDATED_LINKS]
    const menu = state[MENUS_STATE.CURRENT_MENU]
    return updatedLinks || (menu ? menu.links : [])
  }
}
