<template>
	<div class="categories-page">
		<h1>Assets</h1>
		<h2>Choose Storage to edit / manage assets within:</h2>
		<AssetsStorageList/>
	</div>
</template>
<script>
  import { Vue, Component } from 'vue-property-decorator'
  import AssetsStorageList from '../../components/assets/AssetsStorageList'

  @Component({
    components: { AssetsStorageList }
  })
  export default class Storage extends Vue {
  }
</script>
