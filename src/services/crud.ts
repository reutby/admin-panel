import { AxiosResponse } from 'axios'
import { api, getCallData } from './api'

export function getCrud<T = any>(path: string) {
  return {
    getAll(): Promise<T[]> {
      return api.get(path).then(getCallData)
    },
    getOne(id: string | number): Promise<T> {
      return api.get<T>(`${path}/${id}`).then(getCallData)
    },
    create(data: any): Promise<T> {
      return api.post(path, data).then(getCallData)
    },
    remove(id: string | number): Promise<AxiosResponse> {
      return api.delete(`${path}/${id}`)
        .then((res) => {
          return res.status >= 300 ? Promise.reject(res) : res
        })
    },
    update(id: string | number, updatedData: any): Promise<T> {
      return api.put(`${path}/${id}`, updatedData).then(getCallData)
    }
  }
}
