<template>
	<div class="category-page">
		<PageTitle title="Create Category" :item-name="category.name"/>
		<CategoryForm v-if="category" :category="category" @submit="submit"/>
	</div>
</template>
<script>
  import CategoryForm from './components/CategoryForm'
  import { useEditCategory } from './compositions/categories'
  import PageTitle from '../core/components/semantics/PageTitle'

  export default {
    name: 'EditCategory',
    components: { PageTitle, CategoryForm },
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
