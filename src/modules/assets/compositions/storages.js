import { reactive, ref } from '@vue/composition-api'
import api from '../../../services/api'
import { getAssetInStorage } from './assets'

export function createStorage(storage) {
  return api.withData.post('/api/storage', storage)
}

export function updateStorage(storage) {
  return api.withData.put('/api/storage/' + storage._id, storage)
}

export function removeStorage(storageId) {
  return api.withData.delete('/api/storage/' + storageId)
}

export function useStorageList() {
  const items = ref([])

  api.withData.get('/api/storage').then((data) => (items.value = data))

  return {
    items,
    remove: async (storage) => {
      await removeStorage(storage._id)
      items.value = items.value.filter((s) => s !== storage)
    }
  }
}

export function useStorageForm(props) {
  const editedStorage = reactive({
    ...(props.value || {
      name: 'New Storage',
      kind: 'ftp'
    }),
    authentication: null,
    metadata: {
      publicUrl: '',
      basePath: '/',
      ...(props.value ? props.value.metadata : {})
    }
  })
  const showAuth = ref(!props.value)

  return {
    editedStorage,
    showAuth
  }
}

export function useStorage(storageId) {
  const data = reactive({
    loading: true,
    storage: {}
  })

  api.withData.get('/api/storage/' + storageId).then((storage) => {
    data.storage = storage
    data.loading = false
  })

  getAssetInStorage(storageId)

  return { data }
}
