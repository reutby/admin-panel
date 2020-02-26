<template>
	<el-form class="category-form" @submit.native.prevent="submit">
		<div>
			<el-checkbox label="Public?" :checked="isPublic" @change="editedCategory.isPublic = $event"/>
		</div>
		<FormInput title="Name" :value="name" @input="editedCategory.name = $event"/>
		<FormInput title="Path" label="leave empty to auto-generate" :value="path"
		           @input="editedCategory.path = $event"/>
		<el-button native-type="submit">SAVE</el-button>
	</el-form>
</template>
<script>
  import FormInput from '../../core/components/forms/FormInput'
  import { clearNulls } from '../../../helpers/clear-nulls'
  import { useCategoryForm } from '../compositions/categories'

  export default {
    name: 'CategoryForm',
    components: { FormInput },
    props: {
      category: Object
    },
    setup (props, { emit }) {
      const data = useCategoryForm(props)

      return {
        ...data,
        submit: () => emit('submit', clearNulls(data.editedCategory))
      }
    }
  }
</script>
<style scoped>
</style>
