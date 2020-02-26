<template>
	<label>
		Search Post by Title:
		<el-input :value="title" @input="onInput" name="post-title"/>
	</label>
</template>
<script>
  export default {
    name: 'PostSelector',
    props: {
      value: String,
      title: String,
    },
    setup () {
      return {
        onInput (value) {
          if (value > 2) {
            // do API search for posts, and show autocomplete
          }
        }
      }
    }
  }
</script>
<style scoped lang="scss">

</style>
