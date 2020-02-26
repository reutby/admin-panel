<template>
	<div class="add-storage-page">
		<h1>Add new Storage</h1>
		<StorageForm @submit="save"/>
	</div>
</template>
<script>
  import StorageForm from './components/StorageForm'
  import { createStorage } from './compositions/storages'

  export default {
    name: 'AddStorage',
    components: { StorageForm },
    setup () {
      return {
        save: createStorage
      }
    }
  }
</script>
<style scoped>
	h1 i {
		color: #00C48D;
	}
</style>
