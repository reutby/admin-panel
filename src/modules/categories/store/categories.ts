import Vue from 'vue'
import categoriesService from '../../../services/categories-service'

export interface ICategoriesStore {
  loaded: boolean,
  loading: boolean,
  categories: any[]
}

export const categoriesStore = Vue.observable<ICategoriesStore>({
  loaded: false,
  loading: false,
  categories: []
})

export async function fetchCategories() {
  if (categoriesStore.loaded || categoriesStore.loading) {
    return
  }
  categoriesStore.loading = true
  categoriesStore.loaded = false
  try {
    categoriesStore.categories = await categoriesService.getAll()
    categoriesStore.loaded = true
  } catch (e) {
    categoriesStore.loaded = false
  } finally {
    categoriesStore.loading = false
  }
}

export async function removeCategory(path) {
  categoriesStore.categories = categoriesStore.categories.filter(category => category.path !== path)
}

export function addCategory(category) {
  categoriesStore.categories.push(category)
}
