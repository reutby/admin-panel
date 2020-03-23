import { computed, reactive, ref } from '@vue/composition-api'
import api from '../../../plugins/api'

export function createStorage (storage) {
  return api.withData.post('/api/storage', storage)
}

export function updateStorage (storage) {
  return api.withData.put('/api/storage/' + storage._id, storage)
}

export function removeStorage (storageId) {
  return api.withData.delete('/api/storage/' + storageId)
}

export function useStorageList () {
  const items = ref([])

  api.withData.get('/api/storage').then(data => items.value = data)

  return {
    items,
    remove: async (storage) => {
      await removeStorage(storage._id)
      items.value = items.value.filter(s => s !== storage)
    }
  }
}

export function useStorageForm (props) {
  const editedStorage = reactive({
    name: '',
    kind: '',
    authentication: null
  })
  const name = computed(() => {
    const name = props.value ? props.value.name : ''
    return editedStorage.name || name
  })
  const kind = computed(() => {
    const kind = props.value ? props.value.kind : 's3'
    return editedStorage.kind || kind
  })

  return {
    editedStorage,
    name,
    kind
  }
}

export function useStorage (storageId) {
  const data = reactive({
    loading: true,
    storage: {},
    files: null
  })

  api.withData.get('/api/storage/' + storageId).then(storage => data.storage = storage)

  return { data }
}
