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
			<tr v-for="config in list" :key="config.key">
				<td>
					<router-link :to="{name: 'editConfiguration', params: {key: config.key}}">{{config.key}}
					</router-link>
				</td>
				<td><i v-if="config.public" class="el-icon-check"/></td>
				<td>{{config.description}}</td>
			</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
  import { useConfigurationsList } from '../../views/configurations/compositions/configurations'

  export default {
    name: 'ConfigurationsList',
    setup () {
      return useConfigurationsList()
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
