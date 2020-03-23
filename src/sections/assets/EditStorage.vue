<template>
	<div class="add-storage-page">
		<h1>Edit Storage: {{data.storage.name}}</h1>
		<StorageForm :value="data.storage" @submit="save"/>
	</div>
</template>
<script>
  import StorageForm from './components/StorageForm'
  import { updateStorage, useStorage } from './compositions/storages'

  export default {
    name: 'EditStorage',
    components: { StorageForm },
    setup (_, { root: { $route } }) {
      const { data } = useStorage($route.params.storageId)
      return {
        data,
        save: changes => {
          const { _id, name, kind } = data.storage
          return updateStorage({ _id, name, kind, ...changes })
        }
      }
    }
  }
</script>
<style scoped>
	h1 i {
		color: #00C48D;
	}
</style>
