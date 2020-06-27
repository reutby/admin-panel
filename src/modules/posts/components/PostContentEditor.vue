<template>
	<div class="content-editor">
		<div class="content-options">
			<el-select class="change-type" :value="state" @change="changeType" size="mini">
				<el-option value="editor" label="Content Editor"/>
				<el-option value="html" label="HTML Editor"/>
				<el-option value="view" label="View"/>
			</el-select>
			<el-button type="danger"
			           native-type="button"
			           size="mini"
			           icon="el-icon-delete"
			           @click="removeContent"
			/>
		</div>
		<template>
			<gp-editor v-if="state === 'editor'" :value="value" @input="changeContent"/>
			<textarea v-else-if="state === 'html'" :value="value" @input="changeContent($event.target.value)"/>
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
        changeContent: ($event) => emit('contentChange', $event),
        removeContent: () => emit('remove', props.value)
      }
    }
  }
</script>
<style scoped lang="scss">
	@import "../../../style/colors";

	.content-editor {
		display: flex;
		flex-direction: column;
	}

	textarea, iframe {
		width: 100%;
		min-height: 300px;
		display: block;
		padding: 10px;
		border: 1px solid $border-color;
	}

	.content-options {
		display: flex;
		justify-content: flex-end;
		align-items: center;

		> * {
			margin-left: 5px;
		}
	}

</style>
