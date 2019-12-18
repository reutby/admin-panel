<template>
	<p>
		<label>
			{{title}}<small v-if="label"> ({{label}})</small>:
			<el-input v-on="$listeners" v-bind="binds"/>
			<slot></slot>
		</label>
	</p>
</template>

<script>
  export default {
    name: 'FormInput',
    props: {
      title: String,
      label: String
    },
    computed: {
      binds () {
        return {
          ...this.$attrs,
          title: undefined,
          label: undefined
        }
      }
    }
  }
</script>

<style scoped>

</style>
