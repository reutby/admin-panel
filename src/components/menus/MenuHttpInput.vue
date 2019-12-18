<template>
	<div>
		<label>
			Text: <el-input :value="value.text" @input="emitChange('text', $event.target.value)"/>
		</label>
		<label>
			URL: <el-input :value="value.url" @input="emitChange('url', $event.target.value)"/>
		</label>
		<label>
			<el-input :checked="value.newWindow" type="checkbox" @input="emitChange('newWindow', $event.target.checked)"/>
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
