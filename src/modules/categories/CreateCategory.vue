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
  import { removeUnsavedChanges } from '@/modules/drafts/compositions/unsaved-changes.ts'
  import { defineComponent, getCurrentInstance } from '@vue/composition-api'

  export default defineComponent({
    name: 'CreateCategory',
    components: { PageTitle, CategoryForm },
    setup() {
      const { $router } = getCurrentInstance()
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
  })
</script>
