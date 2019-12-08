<template>
	<div class="category-page">
		<h1>Edit Category</h1>
		<CategoryForm v-if="category" :category="category" @submit="submit"/>
	</div>
</template>
<script>
  import { Vue, Component } from 'vue-property-decorator'
  import CategoryForm from '../../components/categories/CategoryForm'
  import { CATEGORIES_MODULE_NAME, CATEGORIES_ACTIONS, CATEGORIES_STATE } from '../../store/categories/consts'
  import { createNamespacedHelpers } from 'vuex'

  const { mapActions, mapState } = createNamespacedHelpers(CATEGORIES_MODULE_NAME)

  @Component({
    components: { CategoryForm },
    computed: mapState({ category: CATEGORIES_STATE.CURRENT_CATEGORY }),
    methods: mapActions({ save: CATEGORIES_ACTIONS.UPDATE_CURRENT_CATEGORY, fetch: CATEGORIES_ACTIONS.FETCH_CATEGORY })
  })
  export default class EditCategory extends Vue {
    created () {
      this.fetch(this.$route.params.categoryPath)
    }

    submit (category) {
      this.save(category)
        .then(category => {
          if (category.path !== this.$route.params.categoryPath) {
            this.$router.push({
              name: 'editCategory',
              params: { categoryPath: category.path }
            })
          }
        })
    }
  }
</script>
<style scoped>
	h1 i {
		color: #00C48D;
	}
</style>
