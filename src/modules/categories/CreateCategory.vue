<template>
  <div class="category-page">
    <PageTitle title="Create Category" />
    <CategoryForm :category="{}" @submit="submit" />
  </div>
</template>
<script>
  import CategoryForm from './components/CategoryForm'
  import { createCategory } from './compositions/categories'
  import PageTitle from '../core/components/semantics/PageTitle'
  import { removeUnsavedChanges } from '@/modules/core/compositions/unsaved-changes.ts'

  export default {
    name: 'CreateCategory',
    components: { PageTitle, CategoryForm },
    setup(_, { root: { $router } }) {
      async function submit(data) {
        const { path } = await createCategory(data)
        removeUnsavedChanges('category')
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
