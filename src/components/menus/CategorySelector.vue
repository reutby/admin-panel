<template>
	<label>
		Category:
		<input :value="value" @change="emitChange" name="category-id">
	</label>
</template>
<script>
  import { Vue, Component, Prop } from 'vue-property-decorator'

  @Component
  export default class CategorySelector extends Vue {
    @Prop(String) value // category ID

    emitChange (event) {
      this.$emit('change', event.target.value)
    }
  }
</script>
<style scoped lang="scss">

</style>
