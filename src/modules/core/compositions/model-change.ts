import { ref, watch } from '@vue/composition-api'

export function useModelChange(modelValue, list, emit) {
  const selected = ref(null)
  watch(
    () => modelValue,
    () => {
      selected.value = list.value.find(item => item._id === modelValue.value)
    })

  return {
    selected,
    change: (item) => {
      selected.value = item
      emit('change', item)
    }
  }
}
