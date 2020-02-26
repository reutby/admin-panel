<template>
	<el-form @submit.native.prevent="updateMenu">
		<el-button @click="addLink" native-type="button">ADD</el-button>
		<MenuLinkInput v-for="(item, $index) in links" :value="item" :key="$index"
		               @remove="removeLink"
		               @change="updateLink"/>
		<el-button native-type="submit">SAVE</el-button>
	</el-form>
</template>
<script>
  import MenuLinkInput from './MenuLinkInput'
  import { useMenuOperations } from '../../views/menus/compositions/menus'

  export default {
    name: 'MenuEditor',
    components: { MenuLinkInput },
    props: {
      menu: String
    },
    setup (props) {
      return useMenuOperations(props.menu)
    }
  }
</script>
