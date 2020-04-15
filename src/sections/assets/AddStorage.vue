<template>
	<div class="add-storage-page">
		<PageTitle title="Add new Storage"/>
		<StorageForm @submit="submit" :submitting="submitting"/>
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
    setup () {
      const { submitting, submit } = useSubmitting(createStorage)

      return {
        submitting,
        submit
      }
    }
  }
</script>
