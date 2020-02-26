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
		<i @click="$emit('remove', value)" class="el-icon-delete"/>
	</div>
</template>
<script>
  import MenuKindInput from './MenuKindInput'
  import PostSelector from './PostSelector'
  import MenuHttpInput from './MenuHttpInput'
  import CategorySelector from '../../categories/components/CategorySelector'

  export default {
    components: { CategorySelector, MenuHttpInput, PostSelector, MenuKindInput },
    props: {
      value: Object
    },
    setup (props, { emit }) {
      function emitUpdate (changes) {
        emit('change', {
          ...props.value,
          ...changes
        })
      }

      return {
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
          emitUpdate({ kind, value })
        },
        changeValue: (value) => emitUpdate({ value })
      }
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
