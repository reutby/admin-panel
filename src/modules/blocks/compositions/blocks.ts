import { computed, reactive, ref } from '@vue/composition-api'
import blocksService from '@/services/blocks-service.ts'
import 
{
	addBlock
} from '../store/blocks'

function fetchBlocks() {
	return blocksService.getAll()
}

export function useBlocksList() {
	const blocks = ref<any[]>([])
  
	fetchBlocks().then(list => blocks.value = list)
  
	return {
	  blocks,
	  remove: (blockId) => blocksService.remove(blockId)
		.then(() => blocks.value = blocks.value.filter(({ _id }) => _id !== blockId))
	}
}

export function createBlock(block) {
	return blocksService.create(block).then((block) => {
		addBlock(block)
		return block
	})
}

export function useBlockForm(props) {
	const editedBlock = reactive<{ [key: string]: any | null }>({
		name: null,
		description: null,
	})

	const name = computed(() => {
	return editedBlock.name === null
		? props.block.name
		: editedBlock.name
	})

	const description = computed(() => {
	return editedBlock.description === null
		? props.Block.description
		: editedBlock.description
	})

	return {
	editedBlock,
	name,
	description,
	}
}