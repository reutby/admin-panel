<template>
	<div class="category-page">
		<h1>Create Category</h1>
		<CategoryForm :category="{}" @submit="submit"/>
	</div>
</template>
<script>
  import { Vue, Component } from 'vue-property-decorator'
  import { createNamespacedHelpers } from 'vuex'
  import CategoryForm from '../../components/categories/CategoryForm'
  import { CATEGORIES_MODULE_NAME, CATEGORIES_ACTIONS } from '../../store/categories/consts'

  const { mapActions } = createNamespacedHelpers(CATEGORIES_MODULE_NAME)

  @Component({
    components: { CategoryForm },
    methods: mapActions({ save: CATEGORIES_ACTIONS.CREATE_CATEGORY })
  })
  export default class CreateCategory extends Vue {
    submit (category) {
      this.save(category)
        .then(category => this.$router.push({
          name: 'editCategory',
          params: { categoryPath: category.path }
        }))
    }
  }
</script>
<style scoped>
	h1 i {
		color: #00C48D;
	}
</style>
