<template>
	<div>
		<el-form-item :label="title">
			<small v-if="label"> ({{label}})</small>
			<el-input v-on="$listeners" :value="value" :native-type="type"/>
		</el-form-item>
		<slot/>
	</div>
</template>

<script>
  export default {
    name: 'FormInput',
    props: {
      title: String,
      label: String,
      type: String,
      value: [String, Number, Object],
    }
  }
</script>

<style scoped>

</style>
