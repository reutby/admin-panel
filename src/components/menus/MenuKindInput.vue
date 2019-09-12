<template>
	<label>
		Kind:
		<select :value="value" @change="emitChange">
			<option value="category">Category</option>
			<option value="post">Post</option>
			<option value="http">HTTP</option>
		</select>
	</label>
</template>
<script>
  import { Vue, Component, Prop } from 'vue-property-decorator'

  @Component
  export default class MenuKindInput extends Vue {
    @Prop(String) value

    emitChange (event) {
      this.$emit('change', event.target.value)
    }
  }
</script>
<style scoped lang="scss">

</style>
