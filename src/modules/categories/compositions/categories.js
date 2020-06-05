import { computed, reactive, onMounted, ref } from '@vue/composition-api'
import store from '../../../store'
import { CATEGORIES_ACTIONS, CATEGORIES_MODULE_NAME, CATEGORIES_STATE } from '../../../store/categories/consts'

function dispatch (action, payload) {
  return store.dispatch(CATEGORIES_MODULE_NAME + '/' + action, payload)
}

function fromState (prop) {
  return store.state[CATEGORIES_MODULE_NAME][prop]
}

function getCategoriesRef () {
  return fromState(CATEGORIES_STATE.CATEGORIES)
}

function fetchCategories () {
  return dispatch(CATEGORIES_ACTIONS.FETCH_CATEGORIES)
}

export function createCategory (category) {
  return dispatch(CATEGORIES_ACTIONS.CREATE_CATEGORY, category)
}

export function useEditCategory (categoryPath) {
  dispatch(CATEGORIES_ACTIONS.FETCH_CATEGORY, categoryPath)

  return {
    category: computed(() => fromState(CATEGORIES_STATE.CURRENT_CATEGORY)),
    updateCategory: (payload) => dispatch(CATEGORIES_ACTIONS.UPDATE_CURRENT_CATEGORY, payload)
  }
}

export function useCategoriesList () {
  fetchCategories()

  return {
    categories: computed(getCategoriesRef),
    removeCategory: (category) => dispatch(CATEGORIES_ACTIONS.REMOVE_CATEGORY, category)
  }
}

export function useCategoryForm (props) {
  const editedCategory = reactive({
    name: null,
    path: null,
    isPublic: null,
  })
  onMounted(() => {
    if (!props.category._id) {
      editedCategory.isPublic = true
    }
  })
  const name = computed(() => {
    return editedCategory.name === null ? props.category.name : editedCategory.name
  })
  const path = computed(() => {
    return editedCategory.path === null ? props.category.path : editedCategory.path
  })
  const isPublic = computed(() => {
    return editedCategory.isPublic === null ? props.category.isPublic : editedCategory.isPublic
  })

  return {
    editedCategory,
    name,
    path,
    isPublic
  }
}

export function useCategorySelector () {
  const mounted = ref(false)
  fetchCategories().then(() => mounted.value = true)
  return {
    mounted,
    categories: computed(getCategoriesRef),
  }
}
