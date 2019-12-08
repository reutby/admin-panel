<template>
	<select v-model="model">
		<option v-for="category in categories"
		        :key="category._id"
		        :value="category.path">
			{{category.name}}
		</option>
	</select>
</template>
<script>
  import { Vue, Component, Prop } from 'vue-property-decorator'
  import { createNamespacedHelpers } from 'vuex'
  import { CATEGORIES_MODULE_NAME, CATEGORIES_ACTIONS, CATEGORIES_STATE } from '../../store/categories/consts'

  const { mapActions, mapState } = createNamespacedHelpers(CATEGORIES_MODULE_NAME)

  @Component({
    methods: mapActions({ fetch: CATEGORIES_ACTIONS.FETCH_CATEGORIES }),
    computed: mapState({ categories: CATEGORIES_STATE.CATEGORIES })
  })
  export default class CategorySelector extends Vue {
    @Prop(String) value

    get model () {
      const value = this.value
      const categories = this.categories || []

      return value || (categories.length ? categories[0].path : null)
    }

    set model (value) {
      this.$emit('change', value)
    }

    created () {
      this.fetch()
        .then(() => this.$emit('mounted', this.value || (this.categories[0] && this.categories[0].path)))
    }
  }
</script>
