<template>
	<div>
		<label>
			Text: <el-input :value="value.text" @input="emitChange('text', $event)"/>
		</label>
		<label>
			URL: <el-input :value="value.url" @input="emitChange('url', $event)"/>
		</label>
		<label>
			<el-checkbox :checked="value.newWindow" @input="emitChange('newWindow', $event)"/>
			Open in new window
		</label>
	</div>
</template>
<script>
  import { Vue, Component, Prop } from 'vue-property-decorator'

  @Component
  export default class PostSelector extends Vue {
    @Prop({ type: Object, default: {} }) value // object:  {url: String, text: String, newWindow: Boolean}

    emitChange (key, value) {
      this.$emit('change', {
        ...this.value,
        [key]: value
      })
    }
  }
</script>
<style scoped lang="scss">

</style>
