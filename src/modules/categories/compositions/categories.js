import { computed, reactive, onMounted } from '@vue/composition-api'
import {
  addCategory,
  categoriesStore,
  fetchCategories,
  removeCategory
} from '../store/categories'
import { useSubmitting } from '../../core/compositions/submitting'
import categoriesService from '../../../services/categories-service'
import { useDispatcher } from '../../core/compositions/dispatcher'

function useCategories() {
  return computed(() => categoriesStore.categories)
}

export function createCategory(category) {
  return categoriesService.create(category).then((category) => {
    addCategory(category)
    return category
  })
}

export function useEditCategory(categoryPath) {
  const { result: category } = useDispatcher(() =>
    categoriesService.getOne(categoryPath)
  )

  const { submit, submitting } = useSubmitting(
    (payload) => categoriesService.update(categoryPath, payload),
    {
      success: 'Category updated successfully',
      error: 'Failed to update category'
    }
  )

  return {
    category,
    updateCategory: submit,
    submitting
  }
}

export function useCategoriesList() {
  fetchCategories()
  const { submit } = useSubmitting(
    ({ path }) =>
      categoriesService.remove(path).then(() => removeCategory(path)),
    {
      success: 'Category removed successfully',
      error: 'Failed to remove category'
    }
  )

  return {
    categories: useCategories(),
    removeCategory: submit
  }
}

export function useCategoryForm(props) {
  const editedCategory = reactive({
    name: null,
    path: null,
    content: null,
    isPublic: null
  })
  onMounted(() => {
    if (!props.category._id) {
      editedCategory.isPublic = true
    }
  })
  const name = computed(() => {
    return editedCategory.name === null
      ? props.category.name
      : editedCategory.name
  })
  const path = computed(() => {
    return editedCategory.path === null
      ? props.category.path
      : editedCategory.path
  })
  const content = computed(() => {
    return editedCategory.content === null
      ? props.category.content
      : editedCategory.content
  })
  const isPublic = computed(() => {
    return editedCategory.isPublic === null
      ? props.category.isPublic
      : editedCategory.isPublic
  })

  return {
    editedCategory,
    name,
    path,
    content,
    isPublic
  }
}

export function useCategorySelector() {
  fetchCategories()

  return {
    mounted: computed(() => categoriesStore.loaded),
    categories: useCategories()
  }
}
