<template>
  <el-form class="storage-form" @submit.native.prevent="submit">
    <FormInput
      title="Name"
      :value="editedStorage.name"
      @input="editedStorage.name = $event"
    />
    <FormInput
      title="Public URL"
      :value="editedStorage.metadata.publicUrl"
      @input="editedStorage.metadata.publicUrl = $event"
    />
    <FormInput
      title="Base Storage Path"
      :value="editedStorage.metadata.basePath"
      @input="editedStorage.metadata.basePath = $event"
    />
    <p>
      <label>
        Kind:
        <el-select
          :value="editedStorage.kind"
          @change="editedStorage.kind = $event"
        >
          <el-option value="s3" label="Amazon S3" />
          <el-option value="gcloud" label="Google Cloud" />
          <el-option value="ftp" label="FTP" />
        </el-select>
      </label>
    </p>
    <div class="authentication">
      <h3 @click="showAuth = !showAuth">
        <i :class="showAuth ? 'el-icon-arrow-down' : 'el-icon-arrow-right'" />
        Authentication Secrets
      </h3>
      <template v-if="showAuth">
        <StorageFtpAuth
          v-if="editedStorage.kind === 'ftp'"
          :value="editedStorage.authentication"
          @change="editedStorage.authentication = $event"
        />
      </template>
    </div>
    <el-button native-type="submit" :loading="submitting">SAVE</el-button>
  </el-form>
</template>
<script>
  import StorageFtpAuth from './StorageFtpAuth'
  import FormInput from '../../core/components/forms/FormInput'
  import { useStorageForm } from '../compositions/storages'

  export default {
    name: 'StorageForm',
    components: { FormInput, StorageFtpAuth },
    props: {
      value: Object,
      submitting: Boolean
    },
    setup(props, { emit }) {
      const data = useStorageForm(props)
      return {
        ...data,
        submit() {
          return emit('submit', data.editedStorage)
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  @import '../../../style/colors';

  .authentication {
    border: 1px solid #eee;
    padding: 10px;
    margin: 10px;

    h3 {
      color: $main-color;
      cursor: pointer;
    }
  }
</style>
