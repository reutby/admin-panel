<template>
  <div class="category-page" v-if="category">
    <PageTitle title="Edit Category" :item-name="category.name" />
    <CategoryForm
      :category="category"
      :submitting="submitting"
      @submit="updateCategory"
    />
  </div>
</template>
<script>
  import { getCurrentInstance } from '@vue/composition-api'
  import CategoryForm from './components/CategoryForm'
  import { useEditCategory } from './compositions/categories'
  import PageTitle from '../core/components/semantics/PageTitle'

  export default {
    name: 'EditCategory',
    components: { PageTitle, CategoryForm },
    setup() {
      const { $route } = getCurrentInstance()
      const { category, updateCategory, submitting } = useEditCategory($route.params.categoryPath)

      return {
        category,
        updateCategory,
        submitting
      }
    }
  }
</script>
