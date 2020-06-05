<template>
	<div class="categories-page">
		<ListPageTitle title="Categories" create-route="createCategory"/>
		<CategoriesList/>
	</div>
</template>
<script>
  import CategoriesList from './components/CategoriesList'
  import ListPageTitle from '../core/components/semantics/ListPageTitle'

  export default {
    name: 'Categories',
    components: { ListPageTitle, CategoriesList }
  }
</script>
