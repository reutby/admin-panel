<template>
	<div class="add-storage-page">
		<h1>Add new Storage</h1>
		<StorageForm @submit="save"/>
	</div>
</template>
<script>
  import { Vue, Component } from 'vue-property-decorator'
  import StorageForm from '../../components/assets/StorageForm'
  import { createNamespacedHelpers } from 'vuex'
  import { ASSETS_MODULE_NAME, ASSETS_ACTIONS } from '../../store/assets/consts'

  const { mapActions } = createNamespacedHelpers(ASSETS_MODULE_NAME)

  @Component({
    methods: mapActions([ASSETS_ACTIONS.CREATE_STORAGE]),
    components: { StorageForm }
  })
  export default class AddStorage extends Vue {
    save (storage) {
      return this[ASSETS_ACTIONS.CREATE_STORAGE](storage)
    }
  }
</script>
<style scoped>
	h1 i {
		color: #00C48D;
	}
</style>
