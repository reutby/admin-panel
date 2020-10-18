import { computed, watch, ref } from '@vue/composition-api'
import { useAppConfiguration } from '@/modules/configurations/store/app-configuration.ts'

export function useEditorConfig() {
  const config = useAppConfiguration()
  const editorConfig = ref({})

  const language = computed(() => (config.value && config.value.metadata.language) || 'en')

  watch(language, async language => {
    await import(/* webpackChunkName: "translation-[request]" */ `@greenpress/gp-editor/translations/${language}`).catch(() => {
    })
    editorConfig.value = { language }
  })

  return {
    editorConfig
  }
}
