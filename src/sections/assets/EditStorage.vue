<template>
	<div class="add-storage-page">
		<PageTitle title="Edit Storage" :item-name="data.storage.name"/>
		<StorageForm v-if="!data.loading" :submitting="submitting" :value="data.storage" @submit="submit"/>
	</div>
</template>
<script>
  import StorageForm from './components/StorageForm'
  import { updateStorage, useStorage } from './compositions/storages'
  import PageTitle from '../core/components/semantics/PageTitle'
  import { useSubmitting } from '../core/compositions/submitting'

  export default {
    name: 'EditStorage',
    components: { PageTitle, StorageForm },
    setup (_, { root: { $route } }) {
      const { data } = useStorage($route.params.storageId)

      const { submitting, submit } = useSubmitting(function save (changes) {
        const { _id, name, kind } = data.storage
        return updateStorage({ _id, name, kind, ...changes })
          .then((newStorage) => Object.assign(data.storage, newStorage))
      })
      return {
        data,
        submitting,
        submit
      }
    }
  }
</script>
