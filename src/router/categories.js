import Categories from '../sections/categories/Categories.vue'
import EditCategory from '../sections/categories/EditCategory.vue'
import CreateCategory from '../sections/categories/CreateCategory'
import EmptyRoute from '../sections/core/components/layout/EmptyRoute.vue'

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
