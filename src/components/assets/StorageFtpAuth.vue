<template>
	<div>
		<FormInput title="FTP address" v-model="url" @input="emit"/>
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

    url = 'ftp://'
    username = ''
    password = ''

    created () {
      if (this.value) {
        this.url = this.value.url
        this.username = this.value.username
        this.password = this.value.password
      }
    }

    emit () {
      this.$emit('change', {
        url: this.url,
        username: this.username,
        password: this.password
      })
    }
  }
</script>
