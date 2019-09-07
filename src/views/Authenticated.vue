<template>
	<div class="admin-panel">
		<Header class="header"/>
		<div class="admin-content">
			<Navigation class="navigation"/>
			<router-view class="main"/>
		</div>
	</div>
</template>

<script>
  import Header from '../components/layout/Header'
  import Navigation from '../components/layout/Navigation'

  export default {
    name: 'Authenticated',
    components: { Header, Navigation }
  }
</script>
<style scoped lang="scss">
	.admin-panel {
		display: flex;
		width: 100%;
		height: 100%;
		flex-direction: column;
	}

	.admin-content {
		display: flex;
		flex: 1;

		.main {
			flex: 1;
			overflow: auto;
		}
	}
</style>
