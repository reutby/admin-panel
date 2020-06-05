import { ref } from '@vue/composition-api'

export function useSubmitting (submitFn) {
  const submitting = ref(false)

  function wrappedSubmit () {
    submitting.value = true
    return submitFn(...arguments).finally(() => submitting.value = false)
  }

  return { submitting, submit: wrappedSubmit }
}
