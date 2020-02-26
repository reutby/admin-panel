import { computed } from '@vue/composition-api'

export function useEditedInputs (editedObj, originalObj, propsMap = []) {
  return propsMap.reduce((comps, prop) => {
    comps[prop] = computed(() => editedObj[prop] === null ? originalObj[prop] : editedObj[prop])
    return comps
  }, {})
}
