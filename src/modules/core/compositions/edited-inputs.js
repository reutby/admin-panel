import { computed } from '@vue/composition-api'

export function useEditedInputs (editedObj, originalObj, propsMap = []) {
  return propsMap.reduce((comps, prop) => {
    comps[prop] = computed(() => editedObj[prop] === null ? originalObj[prop] : editedObj[prop])
    return comps
  }, {})
}

export function useEditedInputModels (editedObj, originalObj, propsMap = []) {
  return propsMap.reduce((comps, prop) => {
    comps[prop] = computed({
      get: () => editedObj[prop] === null ? originalObj[prop] : editedObj[prop],
      set: value => editedObj[prop] = value
    })
    return comps
  }, {})
}
