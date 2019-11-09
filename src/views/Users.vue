<template>
	<div class="about-page">
		<h1>Users</h1>
		<UsersList/>
	</div>
</template>
<script>
  import { Vue, Component } from 'vue-property-decorator'
  import UsersList from '../components/users/UsersList'

  @Component({
    components: { UsersList }
  })
  export default class Users extends Vue {
  }
</script>
