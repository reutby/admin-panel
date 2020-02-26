<template>
	<div class="storage-page">
		<h1>Storage</h1>
		<p>
			<router-link :to="{name: 'addStorage'}" tag="button">+ Add new Storage</router-link>
		</p>
		<AssetsStorageList/>
	</div>
</template>
<script>
  import AssetsStorageList from './components/AssetsStorageList'

  export default {
    name: 'StorageList',
    components: { AssetsStorageList }
  }
</script>
<style scoped>
	p {
		padding: 5px 10px;
	}
</style>
