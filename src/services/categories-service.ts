import { getCrud } from './crud'
import { ICategory } from '@/services/types/category'

const categoriesService = getCrud<ICategory>('/api/categories')

export default categoriesService
