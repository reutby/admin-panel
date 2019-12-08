<template>
	<div class="edit-post-page">
		<h1>Edit User {{user && user.name}}</h1>
		<UserForm v-if="user" :user="user" @submit="updateUser"/>
	</div>
</template>
<script>
  import { Vue, Component } from 'vue-property-decorator'
  import { createNamespacedHelpers } from 'vuex'
  import { USERS_MODULE_NAME, USERS_ACTIONS, USERS_STATE } from '../../store/users/consts'
  import UserForm from '../../components/users/UserForm'

  const { mapActions, mapState } = createNamespacedHelpers(USERS_MODULE_NAME)

  @Component({
    components: { UserForm },
    methods: mapActions({ fetch: USERS_ACTIONS.FETCH_USER, updateUser: USERS_ACTIONS.UPDATE_CURRENT_USER }),
    computed: mapState({ user: USERS_STATE.CURRENT_USER })
  })
  export default class EditUser extends Vue {
    created () {
      this.fetch(this.$route.params.userId)
    }
  }
</script>
