<template>
	<div class="edit-post-page">
		<PageTitle title="Edit User" v-if="user" :item-name="user.name"/>
		<UserForm v-if="user" :user="user" @submit="updateUser"/>
	</div>
</template>
<script>
  import { useEditUsers } from './compositions/users'
  import UserForm from './components/UserForm'
  import PageTitle from '../core/components/semantics/PageTitle'

  export default {
    name: 'EditUser',
    components: { PageTitle, UserForm },
    setup(_, { root: { $route: { params } } }) {
      return useEditUsers(params.userId)
    }
  }
</script>
