<template>
	<el-form @submit.native.prevent="save">
		<FormInput v-for="key in keys"
		           :key="key"
		           :title="key"
		           v-model="updated[key]"
		           :type="valuesTypes[key]"/>
		<el-button native-type="submit" :loading="submitting">SAVE</el-button>
	</el-form>
</template>

<script>
  import { useEditMetadata } from '../compositions/metadata'
  import { clearNulls } from '../../core/utils/clear-nulls'
  import FormInput from '../../core/components/forms/FormInput'

  export default {
    name: 'ConfigurationForm',
    components: { FormInput },
    props: {
      metadata: Object,
      submitting: Boolean
    },
    setup ({ metadata }, { emit }) {
      const { updated, edited, keys, valuesTypes } = useEditMetadata(metadata)

      return {
        keys,
        valuesTypes,
        updated,
        edited,
        save () {
          emit('save', clearNulls(edited))
        }
      }
    }
  }
</script>

<style scoped>

</style>
