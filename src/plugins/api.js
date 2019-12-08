import axios from 'axios'
import { apiUrl } from '../config'

const api = axios.create({
  baseURL: apiUrl
})
api.defaults.headers.common['authorization'] = 'Bearer ' + localStorage.access_token

api.withData = new Proxy(api, {
  get (api, prop) {
    return function () {
      return api[prop](...arguments)
        .then(res => res ? res.data : Promise.reject(new Error('failed to call url')))
    }
  }
})

export default api
