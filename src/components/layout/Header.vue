<template>
	<header>
		<router-link to="/"><img class="logo" alt="greenpress Admin Panel" src="../../assets/logo.png"></router-link>
		<span class="user-welcome" v-if="user">Hello <strong>{{user.name}}</strong></span>
		<div class="actions">
			<a @click="logout">Logout</a>
		</div>
	</header>
</template>
<script>
  import { Vue, Component } from 'vue-property-decorator'
  import { createNamespacedHelpers } from 'vuex'
  import { AUTH_MODULE_NAME, AUTH_ACTIONS, AUTH_STATE } from '../../store/auth/consts'

  const { mapActions, mapState } = createNamespacedHelpers(AUTH_MODULE_NAME)

  @Component({
    methods: mapActions({ $logout: AUTH_ACTIONS.LOGOUT }),
    computed: mapState({ user: AUTH_STATE.USER })
  })
  export default class Header extends Vue {
    user;

    logout () {
      this.$logout()
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
		align-items: center;
	}

	.user-welcome {
		padding-left: 10px;
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

	.logo {
		max-width: 110px;
		max-height: 100%;
	}

	.actions {
		margin-right: 10px;
		margin-left: auto;
	}
</style>
