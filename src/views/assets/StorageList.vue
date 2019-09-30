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
  import { Vue, Component } from 'vue-property-decorator'
  import AssetsStorageList from '../../components/assets/AssetsStorageList'

  @Component({
    components: { AssetsStorageList }
  })
  export default class StorageList extends Vue {
  }
</script>
<style scoped>
	p {
		padding: 5px 10px;
	}
</style>
