import { ref } from '@vue/composition-api'
import { useNotifications } from './notifications'

export function useSubmitting (submitFn, messages = {}) {
  const submitting = ref(false)
  const { error, success } = useNotifications()
  const errorMessage = typeof messages.error === 'function' ? messages.error : (err) => messages.error || err.message || err
  const successMessage = typeof messages.success === 'function' ? messages.success : () => messages.success

  function wrappedSubmit () {
    submitting.value = true
    return submitFn(...arguments)
      .then(data => {
        const msg = successMessage(data)
        if (msg) {
          success(msg)
        }
        return data
      })
      .catch(err => {
        error(errorMessage(err))
      })
      .finally(() => submitting.value = false)
  }

  return { submitting, submit: wrappedSubmit }
}
