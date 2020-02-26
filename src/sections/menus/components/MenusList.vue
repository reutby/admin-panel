<template>
	<div>
		<ul>
			<li v-for="menu in menus" :key="menu">
				<router-link :to="{name: 'editMenu', params: {menuName: menu}}">{{menu}}</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
  import { useMenusList } from '../compositions/menus'

  export default {
    name: 'MenusList',
    setup () {
      return useMenusList()
    }
  }
</script>
<style scoped lang="scss">

</style>
