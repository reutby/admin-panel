<template>
	<div class="category-page">
		<h1>Edit Category</h1>
		<CategoryForm v-if="category" :category="category" @submit="submit"/>
	</div>
</template>
<script>
  import CategoryForm from '../../components/categories/CategoryForm'
  import { useEditCategory } from './compositions/categories'

  export default {
    name: 'EditCategory',
    components: { CategoryForm },
    setup (_, { root: { $router, $route: { params } } }) {
      const { category, updateCategory } = useEditCategory(params.categoryPath)

      async function submit (data) {
        const { path } = await updateCategory(data)
        if (path !== params.categoryPath) {
          $router.push({
            name: 'editCategory',
            params: { categoryPath: path }
          })
        }
      }

      return {
        category,
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
