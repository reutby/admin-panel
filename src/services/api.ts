import axios, { AxiosResponse } from 'axios'

const baseURL = process.env.VUE_APP_MAIN_APP_URL || location.origin

export const api = axios.create({ baseURL })
api.defaults.headers.common['authorization'] = 'Bearer ' + localStorage.access_token

export const getCallData = (res: AxiosResponse) => {
  return res?.status >= 300 ? Promise.reject(new Error('failed to call url')) : res?.data
}
