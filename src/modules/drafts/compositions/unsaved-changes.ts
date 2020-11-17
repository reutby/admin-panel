import { MessageBox } from 'element-ui'
import debounce from 'lodash.debounce'
import { getCurrentInstance, Ref, watch } from '@vue/composition-api'
import { UnwrapRef } from '@vue/composition-api/dist/reactivity'
import { deleteDraft, getDraft, setDraft } from '@/services/drafts-service'
import { IDraftContexts } from '@/services/types/draft'
import { Route } from 'vue-router'

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

const savePostDraft = debounce(function({ contextType, contextId, contextData, contextDisplayName, contextRouteParams }: IDraftContexts<any>) {
  setDraft({
    contextType,
    contextId,
    contextData,
    contextDisplayName,
    contextRouteParams
  })
}, 3000)

export function useUnsavedChanges(contextType: string, contextId: string | null = null, displayName: Ref<string>, contextData: UnwrapRef<any>) {
  const $route = (getCurrentInstance() as any).$route as Route
  restoreDraft(contextType, contextId, contextData)

  watch(() => [...Object.values(contextData), displayName.value], () => {
    savePostDraft({
      contextType,
      contextId,
      contextData,
      contextDisplayName: displayName.value,
      contextRouteParams: $route.params
    })
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
