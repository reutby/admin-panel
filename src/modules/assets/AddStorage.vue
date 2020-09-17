<template>
  <div class="add-storage-page">
    <PageTitle title="Add new Storage" />
    <StorageForm @submit="submit" :submitting="submitting" />
  </div>
</template>
<script>
  import StorageForm from './components/StorageForm'
  import { createStorage } from './compositions/storages'
  import PageTitle from '../core/components/semantics/PageTitle'
  import { useSubmitting } from '../core/compositions/submitting'

  export default {
    name: 'AddStorage',
    components: { PageTitle, StorageForm },
    setup(_, { root: { $router } }) {
      const { submitting, submit } = useSubmitting(
        async function onCreate(data) {
          const storage = await createStorage(data)
          $router.push({
            name: 'editStorage',
            params: { storageId: storage._id }
          })
        },
        {
          success: 'Storage created successfully',
          error: 'Failed to create storage'
        }
      )

      return {
        submitting,
        submit
      }
    }
  }
</script>
