<template>
	<label>
		Kind:
		<el-select :value="value" @change="emitChange">
			<el-option value="category" label="Category"/>
			<el-option value="post" label="Post"/>
			<el-option value="http" label="HTTP"/>
		</el-select>
	</label>
</template>
<script>
  import { Vue, Component, Prop } from 'vue-property-decorator'

  @Component
  export default class MenuKindInput extends Vue {
    @Prop(String) value

    emitChange (event) {
      this.$emit('change', event)
    }
  }
</script>
<style scoped lang="scss">

</style>
