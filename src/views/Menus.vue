<template>
	<div class="menus-page">
		<h1>This is an menus page</h1>
		<MenusList/>
	</div>
</template>
<script>
  import { Vue, Component } from 'vue-property-decorator'
  import MenusList from '../components/menus/MenusList'

  @Component({
    components: { MenusList }
  })
  export default class Menus extends Vue {
  }
</script>
