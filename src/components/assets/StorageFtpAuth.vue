<template>
	<div>
		<p>
			<label>
				FTP address:
				<input v-model="url" @input="emit">
			</label>
		</p>
		<p>
			<label>
				Username:
				<input v-model="username" @input="emit">
			</label>
		</p>
		<p>
			<label>
				Password:
				<input type="password" v-model="password" @input="emit">
			</label>
		</p>
	</div>
</template>
<script>
  import { Vue, Component, Prop } from 'vue-property-decorator'

  @Component
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
