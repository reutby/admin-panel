import api from '../../../plugins/api'

export function uploadAssetToStorage (storageId, identifier = '/', file) {
  return api.withData.post('/api/assets/' + storageId, file, { params: { identifier } })
}

export function removeAssetFromStorage (storageId, identifier) {
  return api.withData.delete('/api/assets/' + storageId, { params: { identifier } })
}

export function updateAssetFromStorage (storageId, identifier, metadata = {}) {
  return api.withData.put('/api/assets/' + storageId, metadata, { params: { identifier } })
}
