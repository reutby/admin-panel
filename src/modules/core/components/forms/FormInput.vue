<template>
	<div>
		<el-form-item :label="title">
			<small v-if="label"> ({{label}})</small>
			<el-input-number v-if="type === 'number'" v-on="$listeners" :value="value"/>
			<el-input v-else v-on="$listeners" :value="value" :native-type="type"/>
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
