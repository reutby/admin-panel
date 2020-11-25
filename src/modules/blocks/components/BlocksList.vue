<template>
	<table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Description</th>
			</tr>
		</thead>
		<body>
			<tr v-for="block in blocks" :key="block._id">
				<td>
					<router-link :to="{name: 'editBlock', params: {blockId: block._id}}">
						{{block.name}}
					</router-link>
				</td>
				<td>{{block.description}}</td>
				<td>
					<i @click.prevent="remove(post._id)" class="el-icon-delete"/>
				</td>
			</tr>
		</body>
	</table>
</template>
<script>
  import { useBlocksList } from '../compositions/blocks'
  import { useConfirmAction } from '../../core/compositions/confirm-action'

  export default {
    setup() {
      const { blocks, remove } = useBlocksList()
      return { blocks, remove: useConfirmAction(remove) }
    }
  }
</script>
<style scoped lang="scss">
</style>