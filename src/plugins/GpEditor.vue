<template>
	<ckeditor
			v-bind="$attrs"
			v-on="$listeners"
			:editor="editor"
			tag-name="textarea"></ckeditor>
</template>

<script>
  const editor = require('@novicov/ckeditor5-build-classic-full')
  require('@novicov/ckeditor5-build-classic-full/build/translations/en.js')
  editor.defaultConfig.language = 'en'
  export default {
    name: 'GpEditor',
    data () {
      return {
        editor
      }
    }
  }
</script>
