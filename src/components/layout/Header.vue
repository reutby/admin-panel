<template>
	<header>
		<router-link to="/"><img class="logo" alt="Greenpress Admin Panel" src="../../assets/logo.png"></router-link>
		<div class="actions">
			<a @click="logout">Logout</a>
		</div>
	</header>
</template>
<script>
  import { Vue, Component } from 'vue-property-decorator'
  import { createNamespacedHelpers } from 'vuex'
  import { AUTH_MODULE_NAME, AUTH_ACTIONS } from '../../store/auth/consts'

  const { mapActions } = createNamespacedHelpers(AUTH_MODULE_NAME)

  @Component({
    methods: mapActions({ $logout: AUTH_ACTIONS.LOGOUT })
  })
  export default class Header extends Vue {
    logout() {
      this.$logout();
      this.$router.push('login')
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	header {
		display: flex;
		justify-content: flex-start;
		height: 70px;
		background-color: #eee;
	}

	a {
		text-decoration: none;
		border: 0;
		text-align: right;
		height: 100%;
		cursor: pointer;
	}

	.logo {
		max-width: 110px;
		max-height: 100%;
	}

	.actions {
		margin-right: 10px;
		margin-left: auto;
		align-self: center;
	}
</style>
