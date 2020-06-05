import { reactive } from '@vue/composition-api'
import { useEditedInputModels } from '../../core/compositions/edited-inputs'

export function useEditMetadata (metadata) {
  const keys = Object.keys(metadata)
  const editedValues = reactive(keys.reduce((values, key) => {
    values[key] = null
    return values
  }, {}))
  const updated = reactive(useEditedInputModels(editedValues, metadata, keys))
  const valuesTypes = keys.reduce((types, key) => {
    types[key] = typeof updated[key] === 'number' ? 'number' : 'text'
    return types
  }, {})

  return {
    keys,
    valuesTypes,
    edited: editedValues,
    updated
  }
}
