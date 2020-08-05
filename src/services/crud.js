import api from './api'

export function getCrud (path) {
  return {
    getAll () {
      return api.withData.get(path)
    },
    getOne (id) {
      return api.withData.get(`${path}/${id}`)
    },
    create (data) {
      return api.withData.post(path, data)
    },
    remove (id) {
      return api.delete(`${path}/${id}`)
        .then((res) => {
          return res.statusCode >= 300 ? Promise.reject(res) : res
        })
    },
    update (id, updatedData) {
      return api.withData.put(`${path}/${id}`, updatedData)
    }
  }
}
