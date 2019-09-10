<template>
	<div>
		<label>
			Kind:
			<select :value="kind" @change="changeKind">
				<option value="category">Category</option>
				<option value="post">Post</option>
				<option value="http">HTTP</option>
			</select>
		</label>
		<label>ID: <input :value="id" @change="editId"></label>
		<button type="button" @click="$emit('remove', value)">REMOVE</button>
	</div>
</template>
<script>
  import { Vue, Component, Prop } from 'vue-property-decorator'

  @Component
  export default class MenuLinkInput extends Vue {
    @Prop(Object) value
    editedKind = ''
    editedId = ''

    changeKind ($event) {
      this.editedKind = $event.target.value
      this.emitUpdate()
    }

    editId ($event) {
      this.editedId = $event.target.value
      this.emitUpdate()
    }

    emitUpdate () {
      this.$emit('change', {
        _id: this.value._id,
        kind: this.kind,
        value: this.id
      })
    }

    get id () {
      if (this.editedId) return this.editedId

      switch (this.value.kind) {
        case 'category':
          return this.value.category ? this.value.category._id : ''
        case 'post':
          return this.value.post ? this.value.post._id : ''
        case 'http':
          return this.value.value || ''
      }
    }

    get kind () {
      return this.editedKind || (this.value ? this.value.kind : '')
    }
  }
</script>
<style scoped lang="scss">

</style>
