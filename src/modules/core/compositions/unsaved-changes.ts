import { MessageBox } from 'element-ui'
import debounce from 'lodash.debounce'
import { watch } from '@vue/composition-api'
import { UnwrapRef } from '@vue/composition-api/dist/reactivity'
import { deleteDraft, getDraft, setDraft } from '@/services/drafts-service'

async function restoreDraft(contextType: string, contextId: string | null, contextData: UnwrapRef<any>) {
  let draft
  try {
    draft = await getDraft(contextType, contextId)
  } catch (e) {
    return
  }
  if (!draft?.contextData) {
    return
  }
  try {
    await MessageBox.confirm('Would you like to restore unsaved changes?', 'You have unsaved changes', { type: 'info' })
    Object.assign(contextData, draft.contextData)
  } catch (err) {
    removeUnsavedChanges(contextType, contextId)
  }
}

const savePostDraft = debounce(function(contextType: string, contextId: string | null, contextData: UnwrapRef<any>) {
  setDraft({
    contextType,
    contextId,
    contextData
  })
}, 3000)

export function useUnsavedChanges(contextType: string, contextId: string | null = null, contextData: UnwrapRef<any>) {
  restoreDraft(contextType, contextId, contextData)

  watch(() => Object.values(contextData), () => {
    savePostDraft(contextType, contextId, contextData)
  }, { lazy: true })

  return {
    saveChanges: (data: any) => {
      savePostDraft(contextType, contextId, data || contextData)
    }
  }
}

export function removeUnsavedChanges(contextType: string, contextId: string | null = null) {
  deleteDraft(contextType, contextId)
}
