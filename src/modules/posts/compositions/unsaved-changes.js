import { MessageBox } from 'element-ui'
import { getItem, removeItem, setItem } from '../../core/utils/storage'
import { watchEffect } from '@vue/composition-api'

export function useUnsavedChanges (postId = 'new', editedPost) {
  const storageKey = `unsaved-post:${postId}`
  const unsavedPostData = getItem(storageKey)

  if (unsavedPostData) {
    MessageBox.confirm('Would you like to restore unsaved changes?', 'You have unsaved changes', { type: 'info' })
      .then(() => {
        Object.assign(editedPost, unsavedPostData)
      })
      .catch(() => {
        removeItem(storageKey)
      })
  }

  watchEffect(() => setItem(storageKey, editedPost))

  return {
    saveChanges: (data) => {
      setItem(storageKey, data || editedPost)
    }
  }
}

export function removeUnsavedChanges (postId = 'new') {
  const storageKey = `unsaved-post:${postId}`
  removeItem(storageKey)
}
