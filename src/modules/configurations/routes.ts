import Configurations from './Configurations.vue'
import EditConfiguration from './EditConfiguration.vue'
import EmptyRoute from '../core/components/layout/EmptyRoute.vue'
import { RouteConfig } from 'vue-router'

const configurationsRoutes: RouteConfig = {
  path: '/configurations',
  redirect: { name: 'configurations' },
  component: EmptyRoute,
  children: [
    {
      path: '',
      name: 'configurations',
      component: Configurations
    },
    {
      path: ':key',
      name: 'editConfiguration',
      component: EditConfiguration
    }
  ]
}

export default configurationsRoutes
