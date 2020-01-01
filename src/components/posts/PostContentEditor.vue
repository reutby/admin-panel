<template>
	<div>
		<el-select :value="state" @change="$emit('typeChange', $event)">
			<el-option value="editor" label="Content Editor"/>
			<el-option value="html" label="HTML Editor"/>
			<el-option value="view" label="View"/>
		</el-select>
		<template>
			<gp-editor v-if="state === 'editor'" :value="value" @input="$emit('contentChange', $event)"/>
			<textarea v-else-if="state === 'html'" :value="value" @input="$emit('contentChange', $event)"/>
			<iframe  v-else-if="state === 'view'" :src="'data:text/html, ' + value"/>
		</template>
	</div>
</template>
<script>
  import { Vue, Component, Prop } from 'vue-property-decorator'

  @Component
  export default class PostContentEditor extends Vue {
    @Prop(String) value
    @Prop(String) state
  }
</script>
<style scoped lang="scss">
	@import "../../style/colors";
	textarea, iframe {
		width: 100%;
		min-height: 300px;
		display: block;
		padding: 10px;
		border: 1px solid $border-color;
	}

</style>
