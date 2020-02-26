import store from '../../../store'
import { computed, reactive } from '@vue/composition-api'
import { ASSETS_ACTIONS, ASSETS_MODULE_NAME, ASSETS_STATE } from '../../../store/assets/consts'

function dispatch (action, payload) {
  return store.dispatch(ASSETS_MODULE_NAME + '/' + action, payload)
}

export function createStorage (storage) {
  return dispatch(ASSETS_ACTIONS.CREATE_STORAGE, storage)
}

export function useStorageList () {
  dispatch(ASSETS_ACTIONS.FETCH_STORAGE_LIST)

  return {
    items: computed(() => store.state[ASSETS_MODULE_NAME][ASSETS_STATE.STORAGE_LIST])
  }
}

export function useStorageForm (props) {
  const editedStorage = reactive({
    name: '',
    kind: '',
    authentication: null
  })
  const name = computed(() => {
    const name = props.value ? props.value.name : ''
    return editedStorage.name || name
  })
  const kind = computed(() => {
    const kind = props.value ? props.value.kind : 's3'
    return editedStorage.kind || kind
  })

  return {
    editedStorage,
    name,
    kind
  }
}
