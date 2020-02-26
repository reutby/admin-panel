<template>
	<el-form class="storage-form" @submit.native.prevent="submit">
		<FormInput title="Name" :value="name" @input="editedStorage.name = $event"/>
		<p>
			<label>
				Kind:
				<el-select :value="kind" @change="editedStorage.kind = $event">
					<el-option value="s3" label="Amazon S3"/>
					<el-option value="gcloud" label="Google Cloud"/>
					<el-option value="ftp" label="FTP"/>
				</el-select>
			</label>
		</p>
		<StorageFtpAuth v-if="kind === 'ftp'"
		                :value="editedStorage.authentication"
		                @change="editedStorage.authentication = $event"/>

		<el-button native-type="submit">SAVE</el-button>
	</el-form>
</template>
<script>
  import StorageFtpAuth from './StorageFtpAuth'
  import FormInput from '../forms/FormInput'
  import { useStorageForm } from '../../views/assets/compositions/storages'

  export default {
    name: 'StorageForm',
    components: { FormInput, StorageFtpAuth },
    props: {
      value: Object
    },
    setup (props, { emit }) {
      const data = useStorageForm(props)
      return {
        ...data,
        submit () {
          return emit('submit', data.editedStorage)
        }
      }
    }
  }
</script>
