<template>
	<el-form @submit.native.prevent="submit">
		<FormInput title="Name" :value="name" @input="editedData.name = $event"/>
		<FormInput title="Email" :value="email" @input="editedData.email = $event"/>
		<el-form-item label="Password">
			<small>Leave empty to ignore changes</small>
			<el-input name="password"
			          type="password"
			          :value="editedData.password"
			          @input="editedData.password = $event"/>
		</el-form-item>
		<el-button native-type="submit">SAVE</el-button>
	</el-form>
</template>
<script>
  import { Vue, Component, Prop } from 'vue-property-decorator'
  import FormInput from '../forms/FormInput'
  import { clearNulls } from '../../helpers/clear-nulls'

  @Component({
    components: { FormInput }
  })
  export default class UserForm extends Vue {
    editedData = {
      name: null,
      email: null,
      password: null
    }

    @Prop(Object) user

    get name () {
      return this.editedData.name === null ? this.user.name : this.editedData.name
    }

    get email () {
      return this.editedData.email === null ? this.user.email : this.editedData.email
    }

    submit () {
      this.$emit('submit', clearNulls(this.editedData))
    }
  }
</script>
<style scoped lang="scss">

</style>
