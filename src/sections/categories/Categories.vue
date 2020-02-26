<template>
	<div class="categories-page">
		<h1>Categories</h1>
		<p>
			<router-link :to="{name: 'createCategory'}" tag="button">+ Add new Category</router-link>
		</p>
		<CategoriesList/>
	</div>
</template>
<script>
  import CategoriesList from './components/CategoriesList'

  export default {
    name: 'Categories',
    components: { CategoriesList }
  }
</script>
