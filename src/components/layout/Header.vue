<template>
	<header>
		<el-button type="default" icon="el-icon-menu" class="btn" circle @click="$emit('open')"/>
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
    user

    logout () {
      this.$logout()
      this.$router.push('login')
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
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
