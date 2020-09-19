import GpEditor from './GpEditor.vue'
import Vue from 'vue'
import { VueConstructor } from 'vue/types/umd'

export const EditorPlugin = {
  install(Vue: VueConstructor) {
    Vue.component('gp-editor', GpEditor)
  }
}

Vue.use(EditorPlugin)
