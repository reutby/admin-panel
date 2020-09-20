import Categories from './Categories.vue'
import EditCategory from './EditCategory.vue'
import CreateCategory from './CreateCategory.vue'
import EmptyRoute from '../core/components/layout/EmptyRoute.vue'
import { RouteConfig } from 'vue-router'

const categoriesRoutes: RouteConfig = {
  path: 'categories',
  redirect: { name: 'categories' },
  component: EmptyRoute,
  children: [
    {
      path: '',
      name: 'categories',
      component: Categories
    },
    {
      path: 'new',
      name: 'createCategory',
      component: CreateCategory
    },
    {
      path: ':categoryPath',
      name: 'editCategory',
      component: EditCategory
    }
  ]
}

export default categoriesRoutes
