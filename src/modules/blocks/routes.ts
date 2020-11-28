import { RouteConfig } from 'vue-router'
import Blocks from '@/modules/blocks/Blocks.vue'
import CreateBlock from './CreateBlock.vue'
import EditBlock from './EditBlock.vue'
import EmptyRoute from '../core/components/layout/EmptyRoute.vue'

const blocksRoutes: RouteConfig = {
  path: '/blocks',
  name: 'blocks',
  component: EmptyRoute,
  children: [
    {
      path: '',
      name: 'blocks',
      component: Blocks
    },
    {
      path: 'new',
      name: 'createBlock',
      component: CreateBlock
    },
    {
      path: ':blockPath',
      name: 'editBlock',
      component: EditBlock
    }
  ]
}

export default blocksRoutes
