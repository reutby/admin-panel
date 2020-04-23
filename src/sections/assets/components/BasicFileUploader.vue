<template>
	<div>
		<el-input v-model="location" placeholder="Location"/>
		<el-upload
				drag
				:headers="headers"
				:action="uploadUrl"
				:before-upload="beforeUpload">
			<i class="el-icon-upload"></i>
			<div class="el-upload__text">Drop file here or <em>click to upload</em></div>
			<div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
		</el-upload>
	</div>
</template>
<script>
  import { ref } from '@vue/composition-api'
  import { useAssetsUpload } from '../compositions/assets'

  export default {
    name: 'BasicFileUploader',
    props: {
      storage: String,
    },
    setup (props, { root }) {
      const location = ref('')
      const { headers, uploadUrl, setUploadUrl } = useAssetsUpload(props.storage, location)

      return {
        headers,
        uploadUrl,
        beforeUpload: (file) => {
          setUploadUrl(file)
          return root.$nextTick()
        },
        location
      }
    }
  }
</script>
