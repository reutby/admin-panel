<template>
  <div>
    <FormInput title="Username" v-model="form.username" />
    <FormInput title="Password" type="password" v-model="form.password" />
	<FormInput title="Access Key" v-model="form.accessKey" />
    <FormInput title="Bucket Name" v-model="form.bucketName" />
  </div>
</template>
<script>
  import { watchEffect, reactive } from '@vue/composition-api'
  import FormInput from '../../core/components/forms/FormInput'

  export default {
    name: 'StorageGcsAuth',
    props: {
      value: Object
    },
    components: { FormInput },
    setup(props, { emit }) {
      const form = reactive({
        username: '',
	    password: '',
	    accessKey: '',
	    bucketName: ''
      })
      if (props.value) {
        form.username = props.value.username
	    form.password = props.value.password
	    form.accessKey = props.value.accessKey
        form.bucketName = props.value.metadata.bucketName
	  }
      watchEffect(() => emit('change', form))
      return {
        form
      }
    }
  }
</script>
