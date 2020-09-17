<template>
  <div class="category-page" v-if="category">
    <PageTitle title="Edit Category" :item-name="category.name" />
    <CategoryForm
      :category="category"
      :submitting="submitting"
      @submit="submit"
    />
  </div>
</template>
<script>
  import { getCurrentInstance } from '@vue/composition-api'
  import CategoryForm from './components/CategoryForm'
  import { useEditCategory } from './compositions/categories'
  import PageTitle from '../core/components/semantics/PageTitle'
  import { useSubmitting } from '../core/compositions/submitting'

  export default {
    name: 'EditCategory',
    components: { PageTitle, CategoryForm },
    setup() {
      const { $router, $route } = getCurrentInstance()
      const { category, updateCategory } = useEditCategory(
        $route.params.categoryPath
      )

      const { submitting, submit } = useSubmitting(
        async function(data) {
          const { path } = await updateCategory(data)
          if (path !== $route.params.categoryPath) {
            $router.push({
              name: 'editCategory',
              params: { categoryPath: path }
            })
          }
        },
        {
          success: 'Category saved successfully',
          error: 'Failed to save category'
        }
      )

      return {
        category,
        submit,
        submitting
      }
    }
  }
</script>
