<template>
	<form class="category-form" @submit.prevent="submit">
		<FormInput title="Name" :value="name" @input="editedCategory.name = $event.target.value"/>
		<FormInput title="Path" label="leave empty to auto-generate"
		           :value="path" @input="editedCategory.path = $event.target.value"/>
		<FormInput
				title="Public?"
				type="checkbox"
				:checked="isPublic"
				@change="editedCategory.isPublic = $event.target.checked"/>
		<el-button native-type="submit">SAVE</el-button>
	</form>
</template>
<script>
  import { Vue, Component, Prop } from 'vue-property-decorator'
  import FormInput from '../forms/FormInput'
  import CategorySelector from '../categories/CategorySelector'

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
      const onlyUpdated = Object.keys(this.editedCategory).reduce((obj, key) => {
        const val = this.editedCategory[key]
        if (val !== null) {
          obj[key] = val
        }
        return obj
      }, {})
      this.$emit('submit', onlyUpdated)
    }
  }
</script>
<style scoped>
</style>
