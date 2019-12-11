<template>
	<ckeditor
			v-bind="$attrs"
			v-on="$listeners"
			:editor="editor"
			tag-name="textarea"/>
</template>
<script>
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
  import CKEditor from '@ckeditor/ckeditor5-vue'

  ClassicEditor.defaultConfig.language = {
    ui: 'en',
    content: 'en'
  }

  export default {
    name: 'GpEditor',
    components: { ckeditor: CKEditor.component },
    data () {
      return {
        editor: ClassicEditor
      }
    }
  }
</script>
