<template>
	<el-form class="category-form" @submit.native.prevent="submit">
		<div>
			<el-checkbox label="Public?" :checked="isPublic" @change="editedCategory.isPublic = $event"/>
		</div>
		<FormInput title="Name" :value="name" @input="editedCategory.name = $event"/>
		<FormInput title="Path" label="leave empty to auto-generate" :value="path" @input="editedCategory.path = $event"/>
		<el-button native-type="submit">SAVE</el-button>
	</el-form>
</template>
<script>
  import { Vue, Component, Prop } from 'vue-property-decorator'
  import FormInput from '../forms/FormInput'
  import CategorySelector from '../categories/CategorySelector'
  import { clearNulls } from '../../helpers/clear-nulls'

  @Component({
    components: { CategorySelector, FormInput }
  })
  export default class CategoryForm extends Vue {
    @Prop(Object) category

    editedCategory = {
      name: null,
      path: null,
      isPublic: null,
    }

    get name () {
      return this.editedCategory.name === null ? this.category.name : this.editedCategory.name
    }

    get path () {
      return this.editedCategory.path === null ? this.category.path : this.editedCategory.path
    }

    get isPublic () {
      return this.editedCategory.isPublic === null ? this.category.isPublic : this.editedCategory.isPublic
    }

    mounted () {
      if (!this.category._id) {
        this.editedCategory.isPublic = true
      }
    }

    submit () {
      this.$emit('submit', clearNulls(this.editedCategory))
    }
  }
</script>
<style scoped>
</style>
