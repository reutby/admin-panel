<template>
	<el-select v-model="model">
		<el-option v-for="category in categories"
		           :key="category._id"
		           :value="category[prop]" :label="category.name"/>
	</el-select>
</template>
<script>
  import { computed, watch } from '@vue/composition-api'
  import { useCategorySelector } from '../compositions/categories'

  export default {
    name: 'CategorySelector',
    props: {
      value: String,
      prop: { type: String, default: 'path' },
    },
    setup (props, { emit }) {
      const model = computed({
        get () {
          const value = props.value
          const categories = this.categories || []

          return value || (categories.length ? categories[0][props.prop] : null)
        },
        set (value) {
          emit('change', value)
        }
      })

      const { mounted, categories } = useCategorySelector()

      watch(
        mounted,
        () => emit('mounted', props.value || (categories[0] && categories[0][props.prop]))
      )

      return {
        model,
        categories
      }
    }
  }
</script>
