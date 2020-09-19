import { reactive, ref } from '@vue/composition-api'
import { api, getCallData } from '@/services/api'
import { getAssetInStorage } from './assets'

export function createStorage(storage) {
  return api.post('/api/storage', storage).then(getCallData)
}

export function updateStorage(storage) {
  return api.put('/api/storage/' + storage._id, storage).then(getCallData)
}

export function removeStorage(storageId) {
  return api.delete('/api/storage/' + storageId).then(getCallData)
}

export function useStorageList() {
  const items = ref([])

  api.get('/api/storage').then(getCallData).then((data) => (items.value = data))

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

  api.get('/api/storage/' + storageId).then(getCallData).then((storage) => {
    data.storage = storage
    data.loading = false
  })

  getAssetInStorage(storageId)

  return { data }
}
