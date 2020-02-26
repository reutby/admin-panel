<template>
	<header>
		<el-button type="default" icon="el-icon-menu" class="btn" circle @click="open"/>
		<span class="user-welcome" v-if="user">Hello <strong>{{user.name}}</strong></span>
		<div class="actions">
			<a @click="logout">Logout</a>
		</div>
	</header>
</template>
<script>
  import { useAuth } from '../../views/core/compositions/authentication'

  export default {
    name: 'Header',
    setup (_, { root: { $router }, emit }) {
      const { user, logout } = useAuth()

      return {
        user,
        open: () => emit('open'),
        logout: async () => {
          await logout()
          $router.push('login')
        }
      }
    }
  }
</script>
<style scoped lang="scss">
	header {
		position: sticky;
		top: 0;
		z-index: 1;
		display: flex;
		justify-content: flex-start;
		height: 70px;
		background-color: #eee;
		align-items: center;
	}

	.user-welcome {
		padding-left: 10px;
	}

	.btn {
		margin-left: 10px;
		font-size: 18px;
		display: none;
	}

	a {
		text-decoration: none;
		border: 0;
		text-align: right;
		height: 100%;
		cursor: pointer;

		&:hover {
			text-decoration: underline;
		}
	}

	.actions {
		margin-right: 10px;
		margin-left: auto;
	}

	@media (max-width: 600px) {
		.btn {
			display: block;
		}
	}
</style>
