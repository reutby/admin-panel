<template>
	<nav>
		<router-link to="/" class="home-logo"><img alt="greenpress Admin Panel" src="../../assets/logo.png"></router-link>

		<router-link to="/configurations">Configurations</router-link>
		<router-link to="/assets">Storage & Assets</router-link>
		<router-link to="/menus">Menus</router-link>
		<router-link to="/categories">Categories</router-link>
		<router-link to="/posts">Posts</router-link>
		<router-link to="/users">Users</router-link>
	</nav>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

	.home-logo {
		padding: 5px 0 10px 0;
		height: 75px;
		text-align: center;

		img {
			max-width: 100%;
			max-height: 100%;
		}
	}

	nav {
		display: flex;
		flex-direction: column;
		width: 150px;
		background-color: #d7e8e6;
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
