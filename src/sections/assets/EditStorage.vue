<template>
	<div class="add-storage-page">
		<PageTitle title="Edit Storage" :item-name="data.storage.name"/>
		<StorageForm :value="data.storage" @submit="save"/>
	</div>
</template>
<script>
  import StorageForm from './components/StorageForm'
  import { updateStorage, useStorage } from './compositions/storages'
  import PageTitle from '../core/components/semantics/PageTitle'

  export default {
    name: 'EditStorage',
    components: { PageTitle, StorageForm },
    setup (_, { root: { $route } }) {
      const { data } = useStorage($route.params.storageId)
      return {
        data,
        save (changes) {
          const { _id, name, kind } = data.storage
          return updateStorage({ _id, name, kind, ...changes })
        }
      }
    }
  }
</script>
