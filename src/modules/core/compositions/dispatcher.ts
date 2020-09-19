import { ref } from '@vue/composition-api'

export function useDispatcher(callback, defaultValue = null) {
  const result = ref(defaultValue)
  const loading = ref(true)
  const error = ref(null)

  const caller = async () => {
    try {
      result.value = await callback()
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  }

  caller()

  return {
    result,
    loading,
    error,
    retry: caller
  }
}
