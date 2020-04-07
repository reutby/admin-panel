<template>
	<div class="add-storage-page">
		<PageTitle title="Add new Storage"/>
		<StorageForm @submit="save"/>
	</div>
</template>
<script>
  import StorageForm from './components/StorageForm'
  import { createStorage } from './compositions/storages'
  import PageTitle from '../core/components/semantics/PageTitle'

  export default {
    name: 'AddStorage',
    components: { PageTitle, StorageForm },
    setup () {
      return {
        save: createStorage
      }
    }
  }
</script>
