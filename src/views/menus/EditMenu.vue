<template>
	<div class="category-page">
		<h1>Edit Menu <i>{{$route.params.menuName}}</i></h1>
		<MenuEditor :menu="$route.params.menuName"/>
	</div>
</template>
<script>
  import MenuEditor from '../../components/menus/MenuEditor'

  export default {
    name: 'EditMenu',
    components: { MenuEditor }
  }
</script>
<style scoped>
	h1 i {
		color: #00C48D;
	}
</style>
