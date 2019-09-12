import { MENUS_STATE, MENUS_MUTATIONS } from './consts'

function flattenMenuLinks (links = []) {
  return links.map(link => {
    if (link.value) return link

    if (link.kind === 'category') {
      link.value = link.category ? link.category._id : null
    } else if (link.kind === 'post') {
      link.value = link.post ? link.post._id : null
    }
    return link
  })
}

export const mutations = {
  [MENUS_MUTATIONS.SET_MENUS]: (state, list) => state[MENUS_STATE.MENUS] = list,
  [MENUS_MUTATIONS.SET_CURRENT_MENU]: (state, menu) => {
    state[MENUS_STATE.CURRENT_MENU] = menu ?
      {
        ...menu,
        links: flattenMenuLinks(menu.links || [])
      } : null
  },
  [MENUS_MUTATIONS.SET_UPDATED_LINKS]: (state, links) => {
    state[MENUS_STATE.UPDATED_LINKS] = links ? flattenMenuLinks(links) : null
  }
}
