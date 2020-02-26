<template>
	<div class="about-page">
		<h1>Users</h1>
		<UsersList/>
	</div>
</template>
<script>
  import UsersList from './components/UsersList'

  export default {
    name: 'Users',
    components: { UsersList }
  }
</script>
