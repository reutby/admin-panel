<template>
	<div class="admin-panel" v-if="isLoaded">
		<Navigation class="navigation" :opened="navigationOpened" @close="navigationOpened = false"/>
		<div class="admin-content">
			<Header class="header" @open="navigationOpened = true"/>
			<router-view class="main"/>
		</div>
	</div>
</template>

<script>
  import { ref } from '@vue/composition-api'
  import Header from './components/layout/Header'
  import Navigation from './components/layout/Navigation'
  import { useAuthenticatedIntercept } from './compositions/authentication'

  export default {
    name: 'Authenticated',
    components: { Header, Navigation },
    setup (_, { root: { $router } }) {
      const navigationOpened = ref(false)

      $router.afterEach(() => navigationOpened.value = false)

      return {
        ...useAuthenticatedIntercept(),
        navigationOpened
      }
    }
  }
</script>
<style scoped lang="scss">
	.admin-panel {
		display: flex;

		width: 100%;
		height: 100%;
		flex-direction: row;
	}

	.admin-content {
		display: flex;
		flex-direction: column;
		flex: 1;

		.main {
			flex: 1;
			overflow: auto;
		}
	}

	@media (max-width: 600px) {
		.admin-panel {
			flex-direction: column;
		}
	}
</style>
