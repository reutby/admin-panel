<template>
	<div class="menu-link-input">
		<MenuKindInput :value="value.kind" @change="changeKind"/>
		<div>
			<CategorySelector v-if="value.kind === 'category'" prop="_id" :value="value.value" @change="changeValue"/>
			<PostSelector v-else-if="value.kind === 'post'"
			              :value="value.value"
			              :title="value.post ? value.post.name : null"
			              @change="changeValue"/>
			<MenuHttpInput v-else-if="value.kind === 'http'"
			               :value="value.value"
			               @change="changeValue"/>
		</div>
		<button type="button" @click="$emit('remove', value)">REMOVE</button>
	</div>
</template>
<script>
  import { Vue, Component, Prop } from 'vue-property-decorator'
  import MenuKindInput from './MenuKindInput'
  import PostSelector from './PostSelector'
  import MenuHttpInput from './MenuHttpInput'
  import CategorySelector from '../categories/CategorySelector'

  @Component({
    components: { CategorySelector, MenuHttpInput, PostSelector, MenuKindInput }
  })
  export default class MenuLinkInput extends Vue {
    @Prop(Object) value

    changeKind (kind) {
      let value
      switch (kind) {
      case 'category':
      case 'post':
        value = ''
        break
      case 'http':
        value = {}
      }
      this.emitUpdate({ kind, value })
    }

    changeValue (value) {
      this.emitUpdate({ value })
    }

    emitUpdate (changes) {
      this.$emit('change', {
        ...this.value,
        ...changes
      })
    }
  }
</script>
<style scoped lang="scss">
	.menu-link-input {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		border: 1px solid #eee;
		margin: 10px;
		padding: 10px;
	}
</style>
