<template>
	<form class="storage-form" @submit.prevent="submit">
		<p>
			<label>
				Name:
				<input :value="name" @input="editedStorage.name = $event.target.value">
			</label>
		</p>
		<p>
			<label>
				Kind:
				<select :value="kind" @change="editedStorage.kind = $event.target.value">
					<option value="s3">Amazon S3</option>
					<option value="gcloud">Google Cloud</option>
					<option value="ftp">FTP</option>
				</select>
			</label>
		</p>
		<StorageFtpAuth v-if="kind === 'ftp'"
		                :value="editedStorage.authentication"
		                @change="editedStorage.authentication = $event"/>

		<button>SAVE</button>
	</form>
</template>
<script>
  import { Vue, Component, Prop } from 'vue-property-decorator'
  import StorageFtpAuth from './StorageFtpAuth'

  @Component({
    components: { StorageFtpAuth }
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
