<template>
	<label>
		Search Post by Title:
		<el-input :value="title" @input="onInput" name="post-title"/>
	</label>
</template>
<script>
  import { Vue, Component, Prop } from 'vue-property-decorator'

  @Component
  export default class PostSelector extends Vue {
    @Prop(String) value // post ID
    @Prop(String) title // post title, if exists..

    emitChange (event) {
      this.$emit('change', event.target.value)
    }

    onInput (event) {
      if (event.target.value > 2) {
        // do API search for posts, and show autocomplete
      }
    }
  }
</script>
<style scoped lang="scss">

</style>
