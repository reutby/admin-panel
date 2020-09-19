<template>
	<div>
		<table>
			<thead>
			<tr>
				<th>Name</th>
				<th>Public</th>
				<th>Path</th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="category in categories" :key="category._id">
				<td>
					<router-link :to="{name: 'editCategory', params: {categoryPath: category.path}}">{{category.name}}
					</router-link>
				</td>
				<td><i v-if="category.isPublic" class="el-icon-check"/></td>
				<td>{{category.path}}</td>
				<td>
					<i @click.prevent="askBeforeRemove(category)" class="el-icon-delete"/>
				</td>
			</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
  import { useCategoriesList } from '../compositions/categories'
  import { useConfirmAction } from '../../core/compositions/confirm-action'

  export default {
    name: 'CategoriesList',
    setup() {
      const { categories, removeCategory } = useCategoriesList()

      return {
        categories,
        askBeforeRemove: useConfirmAction(removeCategory)
      }
    }
  }
</script>
<style scoped lang="scss">
</style>
