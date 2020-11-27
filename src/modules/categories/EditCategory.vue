<template>
  <div class="category-page" v-if="category">
    <PageTitle :title="title" :item-name="category.name" />
    <CategoryForm
      :is-home-page="isHomePage"
      :category="category"
      :submitting="submitting"
      @submit="updateCategory"
    />
  </div>
</template>
<script>
  import { computed, getCurrentInstance } from '@vue/composition-api'
  import CategoryForm from './components/CategoryForm'
  import { useEditCategory } from './compositions/categories'
  import PageTitle from '../core/components/semantics/PageTitle'

  export default {
    name: 'EditCategory',
    components: { PageTitle, CategoryForm },
    setup() {
      const { $route } = getCurrentInstance()
      const { category, updateCategory, submitting } = useEditCategory($route.params.categoryPath)

      const isHomePage = computed(() => !!category.value.homePage)

      return {
        isHomePage,
        title: computed(() => isHomePage.value ? 'Edit' : 'Edit category'),
        category,
        updateCategory,
        submitting
      }
    }
  }
</script>
