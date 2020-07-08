<template>
	<el-form class="login-form" @submit.native.prevent="submit">
		<el-form-item label="Email">
			<el-input name="email" v-model="form.email" type="email" required/>
		</el-form-item>
		<el-form-item label="Password">
			<el-input name="password" v-model="form.password" type="password" required/>
		</el-form-item>
		<div>
			<el-button native-type="submit" :loading="submitting">Login</el-button>
		</div>
	</el-form>
</template>

<script>
  import { watch } from '@vue/composition-api'
  import { useLogin } from '../compositions/authentication'
  import { useSubmitting } from '../compositions/submitting'

  export default {
    name: 'LoginForm',
    setup (_, { root: { $router } }) {
      const { login, form, isLoggedIn } = useLogin()
      const { submit, submitting } = useSubmitting(login)

      watch(isLoggedIn, (is) => is && $router.push({ name: 'home' }))

      return {
        submit,
        form,
        submitting,
      }
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
