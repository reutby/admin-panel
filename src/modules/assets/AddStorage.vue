<template>
  <div class="add-storage-page">
    <PageTitle title="Add new Storage" />
    <StorageForm @submit="submit" :submitting="submitting" />
  </div>
</template>
<script lang="ts">
  import StorageForm from './components/StorageForm.vue'
  import PageTitle from '../core/components/semantics/PageTitle.vue'
  import { useSubmitting } from '../core/compositions/submitting'
  import { addStorage } from '@/modules/assets/store/storages'

  export default {
    name: 'AddStorage',
    components: { PageTitle, StorageForm },
    setup(_, { root: { $router } }) {
      const { submitting, submit } = useSubmitting(
        async function onCreate(data) {
          const storage = await addStorage(data)
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
