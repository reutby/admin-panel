import Vue from 'vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { computed, watch } from '@vue/composition-api'
import { useConfiguration } from '../../configurations/compositions/configurations'

const configuration = Vue.observable({
  initialized: false,
  loaded: false,
})

function initEditor () {
  const { config } = useConfiguration()

  watch(config, (config) => {
    if (config && config.metadata) {
      const editorConfig = ClassicEditor.defaultConfig
      editorConfig.language = {
        ui: config.metadata.language || 'en',
        content: config.metadata.language || 'en'
      }
      configuration.loaded = true
    }
  })
}

export function useEditor () {
  if (!configuration.initialized) {
    initEditor()
  }

  return {
    editor: computed(() => configuration.loaded ? ClassicEditor : null)
  }
}
