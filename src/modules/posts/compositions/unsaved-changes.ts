import { MessageBox } from 'element-ui'
import { Ref, watchEffect } from '@vue/composition-api'
import { deleteDraft, getDraft, setDraft } from '@/services/drafts'
import { debounce } from 'lodash.debounce'

async function restoreDraft(postId: string|null, editedPost: object) {
  try {
    const draft = await getDraft('post', postId)
    if (draft?.contextData) {
      await MessageBox.confirm('Would you like to restore unsaved changes?', 'You have unsaved changes', { type: 'info' })
      Object.assign(editedPost, draft.contextData)
    }
  } catch (err) {
    if (err.message !== 'failed to call url') removeUnsavedChanges(postId)
  }
}

export function useUnsavedChanges(postId: string|null = null, editedPost: Ref<any>) {
  restoreDraft(postId, editedPost)

  const savePostDraft = debounce(
    function(postId: string|null, changes: any) {
      setDraft({
        contextType: 'post',
        contextId: postId,
        contextData: changes
      })
    }, 
    3000
  )

  watchEffect(() => {
    savePostDraft(postId, editedPost)
  })

  return {
    saveChanges: (data: any) => {
      savePostDraft(postId, data || editedPost)
    }
  }
}

export function removeUnsavedChanges(postId: string|null = null) {
  deleteDraft('post', postId)
}
