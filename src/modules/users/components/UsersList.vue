<template>
	<table>
		<thead>
		<tr>
			<th>Name</th>
			<th>Email</th>
			<th>Roles</th>
		</tr>
		</thead>
		<tbody>
		<tr v-for="user in users" :key="user._id">
			<td>
				<router-link :to="{name: 'editUser', params: {userId: user._id}}">
					{{user.name}}
				</router-link>
			</td>
			<td>
				<a :href="user.email">{{user.email}}</a>
			</td>
			<td>{{user.roles | join}}</td>
			<td>
				<i @click.prevent="remove(user)" class="el-icon-delete"/>
			</td>
		</tr>
		</tbody>
	</table>
</template>
<script>
  import { useUsersList } from '../compositions/users'

  export default {
    filters: {
      join: (arr) => arr.join(', ')
    },
    setup () {
      return useUsersList()
    }
  }
</script>
<style scoped lang="scss">

</style>
