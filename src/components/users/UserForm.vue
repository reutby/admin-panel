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
  import { reactive } from '@vue/composition-api'
  import FormInput from '../forms/FormInput'
  import { clearNulls } from '../../helpers/clear-nulls'
  import { useEditedInputs } from '../../views/core/compositions/edited-inputs'

  export default {
    components: { FormInput },
    props: {
      user: Object
    },
    setup (props, { emit }) {
      const editedData = reactive({
        name: null,
        email: null,
        password: null
      })

      return {
        editedData,
        ...useEditedInputs(editedData, props.user, ['name', 'email']),
        submit () {
          emit('submit', clearNulls(editedData))
        }
      }
    }
  }
</script>
<style scoped lang="scss">

</style>
