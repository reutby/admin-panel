import { RouteConfig } from 'vue-router'
import Blocks from '@/modules/blocks/Blocks.vue'

const blocksRoutes: RouteConfig = {
  path: '/blocks',
  name: 'blocks',
  component: Blocks
}

export default blocksRoutes
