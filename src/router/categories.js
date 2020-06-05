import Categories from '../modules/categories/Categories.vue'
import EditCategory from '../modules/categories/EditCategory.vue'
import CreateCategory from '../modules/categories/CreateCategory'
import EmptyRoute from '../modules/core/components/layout/EmptyRoute.vue'

const categoriesRoutes = {
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
