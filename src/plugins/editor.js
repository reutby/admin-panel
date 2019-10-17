import CKEditorPlugin from '@ckeditor/ckeditor5-vue/dist/ckeditor.js'
import GpEditor from './GpEditor'

export const EditorPlugin = {
  install (Vue) {
    Vue.use(CKEditorPlugin)

    Vue.component('gp-editor', GpEditor)
  }
}
