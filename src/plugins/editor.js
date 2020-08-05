import GpEditor from './GpEditor'
import Vue from 'vue'

export const EditorPlugin = {
  install (Vue) {
    Vue.component('gp-editor', GpEditor)
  }
}

Vue.use(EditorPlugin)
