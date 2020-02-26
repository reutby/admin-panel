<template>
	<div class="edit-post-page">
		<h1>Edit User {{user && user.name}}</h1>
		<UserForm v-if="user" :user="user" @submit="updateUser"/>
	</div>
</template>
<script>
  import { useEditUsers } from './compositions/users'
  import UserForm from './components/UserForm'

  export default {
    name: 'EditUser',
    components: { UserForm },
    setup (_, { root: { $route: { params } } }) {
      return useEditUsers(params.userId)
    }
  }
</script>
