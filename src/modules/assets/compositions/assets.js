import { api, getCallData } from '@/services/api'
import { computed, ref } from '@vue/composition-api'

export function getAssetInStorage(storageId, identifier) {
  return api.get('/api/assets/' + storageId, {
    params: { identifier }
  }).then(getCallData)
}

export function useAssetsUpload(storage, location) {
  const uploadUrl = ref('')
  return {
    headers: computed(() => api.defaults.headers.common),
    setUploadUrl(file) {
      const fileName = file.name.split('.')
      const url = new URL(`/api/assets/${storage}`, api.defaults.baseURL)
      const locationPath =
        location.value + (location.value.endsWith('/') ? '' : '/')
      url.searchParams.append('identifier', locationPath)
      url.searchParams.append('prefix', fileName[0].replace(/ /g, ''))
      url.searchParams.append('extension', fileName[fileName.length - 1])

      uploadUrl.value = url.toString()
    },
    uploadUrl
  }
}

export function uploadAssetToStorage(storageId, identifier = '/', file) {
  return api.post('/api/assets/' + storageId, file, {
    params: { identifier }
  }).then(getCallData)
}

export function removeAssetFromStorage(storageId, identifier) {
  return api.delete('/api/assets/' + storageId, {
    params: { identifier }
  }).then(getCallData)
}

export function updateAssetFromStorage(storageId, identifier, metadata = {}) {
  return api.put('/api/assets/' + storageId, metadata, {
    params: { identifier }
  }).then(getCallData)
}
