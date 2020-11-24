import { reactive, ref } from '@vue/composition-api'
import blocksService from '@/services/blocks-service.ts'

function fetchBlocks() {
	return blocksService.getAll()
}

export function usePostsList() {
	const blocks = ref<any[]>([])
  
	fetchBlocks().then(list => blocks.value = list)
  
	return {
	  blocks,
	  remove: (blockId) => blocksService.remove(blockId)
		.then(() => blocks.value = blocks.value.filter(({ _id }) => _id !== blockId))
	}
  }