import Vue from 'vue'
import blocksService from '../../../services/blocks-service'

export interface IBlocksStore {
	loaded: boolean,
	loading: boolean,
	blocks: any[]
}
  
export const blocksStore = Vue.observable<IBlocksStore>({
	loaded: false,
	loading: false,
	blocks: []
})

export function addBlock(block) {
	blocksStore.blocks.push(block)
}