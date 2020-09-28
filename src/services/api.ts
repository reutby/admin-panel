import axios, { AxiosResponse } from 'axios'

const baseURL = process.env.VUE_APP_MAIN_APP_URL || location.origin

export const api = axios.create({ baseURL })

export const getCallData = (res: AxiosResponse) => {
  return res?.status >= 300 ? Promise.reject(new Error('failed to call url')) : res?.data
}
