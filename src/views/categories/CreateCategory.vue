<template>
	<div class="category-page">
		<h1>Create Category</h1>
		<CategoryForm :category="{}" @submit="submit"/>
	</div>
</template>
<script>
  import CategoryForm from '../../components/categories/CategoryForm'
  import { createCategory } from './compositions/categories'

  export default {
    name: 'CreateCategory',
    components: { CategoryForm },
    setup (_, { root: { $router } }) {
      async function submit (data) {
        const { path } = await createCategory(data)
        $router.push({
          name: 'editCategory',
          params: { categoryPath: path }
        })
      }

      return {
        submit
      }
    }
  }
</script>
<style scoped>
	h1 i {
		color: #00C48D;
	}
</style>
