<template>
	<nav :class="{show: opened}">
		<div class="mobile-mask" @click="close"/>
		<router-link to="/" class="home-logo">
			<img alt="greenpress Admin Panel" src="../../assets/logo.png">
		</router-link>
		<router-link to="/configurations">Configurations</router-link>
		<router-link to="/assets">Storage & Assets</router-link>
		<router-link to="/menus">Menus</router-link>
		<router-link to="/categories">Categories</router-link>
		<router-link to="/posts">Posts</router-link>
		<router-link to="/users">Users</router-link>
	</nav>
</template>

<script>
  export default {
    name: 'Navigation',
    props: {
      opened: Boolean
    },
    setup (_, { emit }) {
      return {
        close: () => emit('close')
      }
    }
  }
</script>
<style scoped lang="scss">

	nav {
		display: flex;
		flex-direction: column;
		width: 150px;
		background-color: #d7e8e6;
	}

	.mobile-mask {
		display: none;
	}

	.home-logo {
		padding: 5px 0 10px 0;
		height: 75px;
		text-align: center;

		img {
			max-width: 100%;
			max-height: 100%;
		}
	}

	a {
		font-weight: bold;
		color: #2c3e50;
		padding: 10px;

		&.router-link-active {
			color: #42b983;
		}
	}

	@media (max-width: 600px) {
		nav {
			position: absolute;
			left: -100%;
			top: 0;
			bottom: 0;
			overflow: hidden;
			transition: left 0.2s ease-in-out;
			z-index: 2;

			&.show {
				display: flex;
				left: 0;

				.mobile-mask {
					display: block;
					position: fixed;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					z-index: -1;
				}
			}
		}
	}
</style>
