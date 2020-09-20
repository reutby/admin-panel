import { reactive, ref } from '@vue/composition-api'
import { getAssetInStorage } from './assets'
import storagesService from '@/services/storages-service.ts'

export function createStorage(storage) {
  return storagesService.create(storage)
}

export function updateStorage(storage) {
  return storagesService.update(storage._id, storage)
}

export function removeStorage(storageId: string) {
  return storagesService.remove(storageId)
}

export function useStorageList() {
  const items = ref<any[]>([])

  storagesService.getAll()
    .then((data) => items.value = data)

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

export function useStorage(storageId: string) {
  const data = reactive({
    loading: true,
    storage: {}
  })

  storagesService.getOne(storageId).then((storage) => {
    data.storage = storage
    data.loading = false
  })

  getAssetInStorage(storageId)

  return { data }
}
