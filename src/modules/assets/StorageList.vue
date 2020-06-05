<template>
	<div class="storage-page">
		<ListPageTitle title="Storage" create-route="addStorage"/>
		<AssetsStorageList/>
	</div>
</template>
<script>
  import AssetsStorageList from './components/AssetsStorageList'
  import ListPageTitle from '../core/components/semantics/ListPageTitle'

  export default {
    name: 'StorageList',
    components: { ListPageTitle, AssetsStorageList }
  }
</script>
<style scoped>
	p {
		padding: 5px 10px;
	}
</style>
