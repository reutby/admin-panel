<template>
	<ckeditor
			v-if="editor"
			v-bind="$attrs"
			v-on="$listeners"
			:editor="editor"
			tag-name="textarea"/>
</template>
<script>
  import CKEditor from '@ckeditor/ckeditor5-vue'
  import { useEditor } from '../sections/posts/compositions/gp-editor'

  export default {
    name: 'GpEditor',
    components: { ckeditor: CKEditor.component },
    setup () {
      return useEditor()
    }
  }
</script>
