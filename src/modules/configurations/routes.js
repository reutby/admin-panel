import Configurations from './Configurations'
import EditConfiguration from './EditConfiguration'
import EmptyRoute from '../core/components/layout/EmptyRoute'

const configurationsRoutes = {
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
