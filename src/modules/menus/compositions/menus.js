import { computed, reactive } from '@vue/composition-api'
import menusService from '../../../services/menus-service'

import { useSubmitting } from '../../core/compositions/submitting'
import { useDispatcher } from '@/modules/core/compositions/dispatcher.ts'

export function useMenuOperations(menuName) {
  const { result: menu } = useDispatcher(() => menusService.getOne(menuName), {})

  const updatedMenu = reactive({
    links: [],
    dirty: false
  })
  const links = computed(() => updatedMenu.dirty ? updatedMenu.links : (menu.value.links || []))

  return {
    links,
    updateLink: (link) => {
      updatedMenu.links = [...links.value.map(l => l._id === link._id ? link : l)]
      updatedMenu.dirty = true
    },
    removeLink: (link) => {
      updatedMenu.links = [...links.value.filter(l => l !== link)]
      updatedMenu.dirty = true
    },
    addLink: () => {
      updatedMenu.links = [...links.value, { kind: 'category' }]
      updatedMenu.dirty = true
    },
    updateMenu: useSubmitting(
      () => menusService.update(menuName, { ...menu.value, links: links.value }),
      { success: 'Menu updated successfully', error: 'Failed to update menu' }).submit
  }
}

export function useMenusList() {
  const { result } = useDispatcher(() => menusService.getAll(), [])

  return { menus: result }
}
