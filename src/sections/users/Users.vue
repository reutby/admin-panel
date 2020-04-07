<template>
	<div class="about-page">
		<PageTitle title="Users"/>
		<UsersList/>
	</div>
</template>
<script>
  import UsersList from './components/UsersList'
  import PageTitle from '../core/components/semantics/PageTitle'

  export default {
    name: 'Users',
    components: { PageTitle, UsersList }
  }
</script>
