<template>
	<div class="categories-page">
		<h1>Categories</h1>
		<CategoriesList/>
	</div>
</template>
<script>
  import { Vue, Component } from 'vue-property-decorator'
  import CategoriesList from '../../components/categories/CategoriesList'

  @Component({
    components: { CategoriesList }
  })
  export default class Categories extends Vue {
  }
</script>
