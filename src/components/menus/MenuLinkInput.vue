<template>
	<div>
		<label>
			Kind:
			<select v-model="value.kind">
				<option value="category">Category</option>
				<option value="post">Post</option>
				<option value="http">HTTP</option>
			</select>
		</label>
		<label>ID: <input :value="id"></label>
	</div>
</template>
<script>
  import { Vue, Component, Prop } from 'vue-property-decorator'

  @Component
  export default class MenuLinkInput extends Vue {
    @Prop(Object) value

    get id () {
      switch (this.value.kind) {
        case 'category':
          return this.value.category ? this.value.category._id : ''
        case 'post':
          return this.value.post ? this.value.post._id : ''
        case 'http':
          return this.value.value || ''
      }
    }
  }
</script>
<style scoped lang="scss">

</style>
