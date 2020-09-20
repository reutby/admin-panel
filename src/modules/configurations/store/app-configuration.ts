import Vue from 'vue'
import configurationsService from '@/services/configurations-service'
import { computed } from '@vue/composition-api'

export const appConfigurationStore = Vue.observable<{ loaded: false, data: any, promise: Promise<any> | null }>({
  loaded: false,
  data: null,
  promise: null
})

export function useAppConfiguration() {
  fetchAppConfiguration()
  return computed(() => appConfigurationStore.data)
}

export function fetchAppConfiguration() {
  if (appConfigurationStore.loaded || appConfigurationStore.promise) {
    return
  }
  appConfigurationStore.promise = configurationsService
    .getOne('app-configuration')
    .then(config => appConfigurationStore.data = config)
    .catch(() => ({}))
}
