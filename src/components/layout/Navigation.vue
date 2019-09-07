<template>
	<nav>
		<router-link to="menus">Menus</router-link>
		<router-link to="categories">Categories</router-link>
		<router-link to="posts">Posts</router-link>
		<router-link to="users">Users</router-link>
	</nav>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	nav {
		display: flex;
		flex-direction: column;
		width: 110px;
		background-color: #d7e8e6;
		padding-top: 50px;
	}

	a {
		font-weight: bold;
		color: #2c3e50;
		padding: 10px;

		&.router-link-active {
			color: #42b983;
		}
	}
</style>
