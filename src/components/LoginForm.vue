<template>
	<el-form class="login-form" @submit.native.prevent="submit">
		<el-form-item label="Email">
			<el-input name="email" v-model="email" type="email" autocomplete="off" required/>
		</el-form-item>
		<el-form-item label="Password">
			<el-input name="password" v-model="password" type="password" required/>
		</el-form-item>
		<div>
			<el-button native-type="submit">Login</el-button>
		</div>
	</el-form>
</template>

<script>
  import { Vue, Component } from 'vue-property-decorator'
  import { createNamespacedHelpers } from 'vuex'
  import { AUTH_MODULE_NAME, AUTH_ACTIONS } from '../store/auth/consts'

  const { mapActions } = createNamespacedHelpers(AUTH_MODULE_NAME)

  @Component({
    methods: mapActions({ login: AUTH_ACTIONS.LOGIN })
  })
  export default class LoginForm extends Vue {
    email = ''
    password = ''

    submit () {
      this.login({
        email: this.email,
        password: this.password
      })
        .then(() => this.$router.push({ name: 'home' }))
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	form {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		width: 90%;
		max-width: 500px;
		margin: 0 auto;
	}

	label {
		display: flex;
		padding: 10px 0;
		align-items: center;
		text-align: left;

		span {
			width: 100px;
		}

		input {
			flex-grow: 1;
			padding: 10px;
			border: 1px solid #ddd;
			border-radius: 5px;
			outline: none;
			font-size: 14px;
		}
	}
</style>
