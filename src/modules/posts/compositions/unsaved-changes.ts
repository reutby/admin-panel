import { MessageBox } from 'element-ui'
import debounce from 'lodash.debounce'
import { watch } from '@vue/composition-api'
import { deleteDraft, getDraft, setDraft } from '@/services/drafts'
import { UnwrapRef } from '@vue/composition-api/dist/reactivity'

async function restoreDraft(postId: string | null, editedPost: UnwrapRef<any>) {
  let draft
  try {
    draft = await getDraft('post', postId)
  } catch (e) {
    return
  }
  if (!draft?.contextData) {
    return
  }
  try {
    await MessageBox.confirm('Would you like to restore unsaved changes?', 'You have unsaved changes', { type: 'info' })
    Object.assign(editedPost, draft.contextData)
  } catch (err) {
    removeUnsavedChanges(postId)
  }
}

const savePostDraft = debounce(function(postId: string | null, changes: UnwrapRef<any>) {
  setDraft({
    contextType: 'post',
    contextId: postId,
    contextData: changes
  })
}, 3000)

export function useUnsavedChanges(postId: string | null = null, editedPost: UnwrapRef<any>) {
  restoreDraft(postId, editedPost)

  watch(() => Object.values(editedPost), () => {
    savePostDraft(postId, editedPost)
  }, { lazy: true })

  return {
    saveChanges: (data: any) => {
      savePostDraft(postId, data || editedPost)
    }
  }
}

export function removeUnsavedChanges(postId: string | null = null) {
  deleteDraft('post', postId)
}
