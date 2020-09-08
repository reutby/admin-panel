<template>
	<div>
		<el-form-item :label="title">
			<small v-if="label"> ({{label}})</small>
			<el-input-number v-if="type === 'number'" v-on="$listeners" :value="value"/>
			<AssetUploader v-if="type === 'upload'" v-on="$listeners" :value="value" class="asset-upload"/>
			<el-input v-else v-on="$listeners" :value="value" :native-type="type"/>
		</el-form-item>
		<slot/>
	</div>
</template>

<script>
  import AssetUploader from '@/modules/assets/components/AssetUploader'
  export default {
    name: 'FormInput',
    components: { AssetUploader },
    props: {
      title: String,
      label: String,
      type: String,
      value: [String, Number, Object],
    }
  }
</script>

<style scoped>
	.asset-upload {
		clear: both;
	}
</style>
