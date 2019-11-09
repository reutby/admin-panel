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
			<td>{{user.roles.join(', ')}}</td>
		</tr>
		</tbody>
	</table>
</template>
<script>
  import { Vue, Component } from 'vue-property-decorator'
  import { createNamespacedHelpers } from 'vuex'
  import { USERS_MODULE_NAME, USERS_ACTIONS, USERS_STATE } from '../../store/users/consts'

  const { mapActions, mapState } = createNamespacedHelpers(USERS_MODULE_NAME)

  @Component({
    methods: mapActions({ fetch: USERS_ACTIONS.FETCH_USERS }),
    computed: mapState({ users: USERS_STATE.USERS })
  })
  export default class UsersList extends Vue {
    created () {
      this.fetch()
    }
  }
</script>
<style scoped lang="scss">

</style>
