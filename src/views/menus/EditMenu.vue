<template>
	<div class="category-page">
		<h1>Edit Menu <i>{{$route.params.menuName}}</i></h1>
		<MenuEditor :menu="$route.params.menuName"/>
	</div>
</template>
<script>
  import { Vue, Component } from 'vue-property-decorator'
  import MenuEditor from '../../components/menus/MenuEditor'

  @Component({
    components: { MenuEditor }
  })
  export default class EditMenu extends Vue {
  }
</script>
<style scoped>
	h1 i {
		color: #00C48D;
	}
</style>
