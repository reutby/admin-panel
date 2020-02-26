<template>
	<div class="menus-page">
		<h1>Menus</h1>
		<MenusList/>
	</div>
</template>
<script>
  import MenusList from './components/MenusList'

  export default {
    name: 'Menus',
    components: { MenusList }
  }
</script>
