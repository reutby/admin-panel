<template>
	<div>
		<PageTitle title="Create User"/>
		<UserForm :user="{}" @submit="save"/>
	</div>
</template>
<script>
  import { useCreateUser } from './compositions/users'
  import UserForm from './components/UserForm'
  import PageTitle from '../core/components/semantics/PageTitle'

  export default {
    name: 'CreateUser',
    components: { PageTitle, UserForm },
    setup(_, { root: { $router } }) {
      const { createUser } = useCreateUser()
      return {
        save: async user => {
          const { _id } = await createUser(user)
          $router.push({ name: 'editUser', params: { userId: _id } })
        }
      }
    }
  }
</script>
