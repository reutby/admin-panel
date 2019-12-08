import Categories from '../views/categories/Categories.vue'
import EditCategory from '../views/categories/EditCategory.vue'
import CreateCategory from '../views/categories/CreateCategory'
import EmptyRoute from '../components/layout/EmptyRoute.vue'

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
