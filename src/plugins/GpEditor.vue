<template>
	<ckeditor
			v-bind="$attrs"
			v-on="$listeners"
			editor="classic"
			:editor="editor"
			tag-name="textarea"></ckeditor>
</template>

<script>
  export default {
    name: 'GpEditor',
    data () {
      return {
        editor: require('@ckeditor/ckeditor5-build-classic/build/ckeditor.js')
      }
    }
  }
</script>
