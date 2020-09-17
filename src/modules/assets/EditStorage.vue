<template>
  <div class="add-storage-page">
    <PageTitle title="Edit Storage" :item-name="data.storage.name" />
    <StorageForm
      v-if="!data.loading"
      :submitting="submitting"
      :value="data.storage"
      @submit="submit"
    />
    <h3>Upload Files to Storage:</h3>
    <BasicFileUploader :storage="$route.params.storageId" />
  </div>
</template>
<script>
  import StorageForm from './components/StorageForm'
  import { updateStorage, useStorage } from './compositions/storages'
  import PageTitle from '../core/components/semantics/PageTitle'
  import { useSubmitting } from '../core/compositions/submitting'
  import BasicFileUploader from './components/BasicFileUploader'

  export default {
    name: 'EditStorage',
    components: { BasicFileUploader, PageTitle, StorageForm },
    setup(_, { root: { $route } }) {
      const { data } = useStorage($route.params.storageId)

      const { submitting, submit } = useSubmitting(
        function save(changes) {
          const { _id, name, kind } = data.storage
          return updateStorage({
            _id,
            name,
            kind,
            ...changes
          }).then((newStorage) => Object.assign(data.storage, newStorage))
        },
        {
          success: 'Storage updated successfully',
          error: 'Failed to update storage'
        }
      )
      return {
        data,
        submitting,
        submit
      }
    }
  }
</script>
<style scoped>
  h3 {
    padding: 10px;
  }
</style>
