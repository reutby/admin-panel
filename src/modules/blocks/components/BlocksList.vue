<template>
	<table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Description</th>
				<th>Related posts</th>
				<th>Related categories</th>
				<th>Related layouts</th>
			</tr>
		</thead>
		<body>
			<tr v-for="block in blocks" :key="block._id">
				<td>
					<router-link :to="{name: 'editBlock', params: {blockId: block._id}}">
						{{block.namee}}
					</router-link>
				</td>
				<td>{{block.description}}</td>
				<td>{{block.relatedPosts}}</td>
				<td>{{block.relatedCategories}}</td>
				<td>{{block.relatedLayouts}}</td>
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
      const { blocks, remove } = usePostsList()
      return { blocks, remove: useConfirmAction(remove) }
    }
  }
</script>
<style scoped lang="scss">
</style>