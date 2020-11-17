import { RouteConfig } from 'vue-router'
import Drafts from '@/modules/drafts/Drafts.vue'

const draftsRoutes: RouteConfig = {
  path: '/drafts',
  name: 'drafts',
  component: Drafts
}

export default draftsRoutes
