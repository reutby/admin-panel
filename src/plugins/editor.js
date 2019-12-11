import GpEditor from './GpEditor'

export const EditorPlugin = {
  install (Vue) {
    Vue.component('gp-editor', GpEditor)
  }
}
