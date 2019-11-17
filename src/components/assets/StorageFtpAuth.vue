<template>
	<div>
		<FormInput title="FTP Host" v-model="host" @input="emit"/>
		<FormInput title="Username" v-model="username" @input="emit"/>
		<FormInput title="Password" v-model="password" @input="emit"/>
	</div>
</template>
<script>
  import { Vue, Component, Prop } from 'vue-property-decorator'
  import FormInput from '../forms/FormInput'
  @Component({
    components: { FormInput }
  })
  export default class StorageFtpAuth extends Vue {
    @Prop(Object) value

    host = ''
    username = ''
    password = ''

    created () {
      if (this.value) {
        this.host = this.value.host
        this.username = this.value.username
        this.password = this.value.password
      }
    }

    emit () {
      this.$emit('change', {
        host: this.host,
        username: this.username,
        password: this.password
      })
    }
  }
</script>
