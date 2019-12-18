<template>
	<form class="storage-form" @submit.prevent="submit">
		<FormInput title="Name" :value="name" @input="editedStorage.name = $event.target.value"/>
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
	</form>
</template>
<script>
  import { Vue, Component, Prop } from 'vue-property-decorator'
  import StorageFtpAuth from './StorageFtpAuth'
  import FormInput from '../forms/FormInput'

  @Component({
    components: { FormInput, StorageFtpAuth }
  })
  export default class StorageForm extends Vue {
    @Prop(Object) value

    editedStorage = {
      name: '',
      kind: '',
      authentication: null
    }

    get name () {
      const name = this.value ? this.value.name : ''
      return this.editedStorage.name || name
    }

    get kind () {
      const kind = this.value ? this.value.kind : 's3'
      return this.editedStorage.kind || kind
    }

    submit () {
      this.$emit('submit', this.editedStorage)
    }
  }
</script>
