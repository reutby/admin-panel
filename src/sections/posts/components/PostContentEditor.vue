<template>
	<div>
		<el-select :value="state" @change="changeType">
			<el-option value="editor" label="Content Editor"/>
			<el-option value="html" label="HTML Editor"/>
			<el-option value="view" label="View"/>
		</el-select>
		<template>
			<gp-editor v-if="state === 'editor'" :value="value" @input="changeContent"/>
			<textarea v-else-if="state === 'html'" :value="value" @input="changeContent"/>
			<iframe v-else-if="state === 'view'" :src="iFrameSrc"/>
		</template>
	</div>
</template>
<script>
  import { computed } from '@vue/composition-api'

  export default {
    name: 'PostContentEditor',
    props: {
      value: String,
      state: String
    },
    setup (props, { emit }) {
      return {
        iFrameSrc: computed(() => 'data:text/html, ' + props.value),
        changeType: ($event) => emit('typeChange', $event),
        changeContent: ($event) => emit('contentChange', $event)
      }
    }
  }
</script>
<style scoped lang="scss">
	@import "../../../style/colors";

	textarea, iframe {
		width: 100%;
		min-height: 300px;
		display: block;
		padding: 10px;
		border: 1px solid $border-color;
	}

</style>
