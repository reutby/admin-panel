<template>
	<div>
		<table>
			<thead>
			<tr>
				<th>Name</th>
				<th>Kind</th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="item in items" :key="item._id">
				<td>
					<router-link :to="{name: 'editStorage', params: {storageId: item._id}}">{{item.name}}
					</router-link>
				</td>
				<td>{{item.kind}}</td>
			</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
  import { useStorageList } from '../compositions/storages'

  export default {
    name: 'AssetsStorageList',
    setup () {
      return useStorageList()
    }
  }
</script>
<style scoped lang="scss">
	table {
		width: 100%;
	}

	tr, td {
		text-align: center;
		border: 1px solid #eee;
	}
</style>
