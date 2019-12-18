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
  import { Vue, Component } from 'vue-property-decorator'
  import { createNamespacedHelpers } from 'vuex'
  import api from '../plugins/api'
  import Header from '../components/layout/Header'
  import Navigation from '../components/layout/Navigation'
  import { AUTH_MODULE_NAME, AUTH_ACTIONS } from '../store/auth/consts'

  const { mapActions } = createNamespacedHelpers(AUTH_MODULE_NAME)

  @Component({
    methods: mapActions([AUTH_ACTIONS.FETCH_USER, AUTH_ACTIONS.REFRESH_TOKEN, AUTH_ACTIONS.LOGOUT]),
    components: { Header, Navigation }
  })
  export default class Authentication extends Vue {
    isLoaded = false
    navigationOpened = false

    created () {
      api.interceptors.response.use(null, err => {
        if (err.response.status === 401) {
          if (err.config.url.includes('api/token/refresh')) {
            return
          }
          return this[AUTH_ACTIONS.REFRESH_TOKEN]()
            .then(() => api.request({
              ...err.config,
              headers: undefined
            }))
            .catch(() => this[AUTH_ACTIONS.LOGOUT]())
        }
      })

      this[AUTH_ACTIONS.FETCH_USER]()
        .then(() => this.isLoaded = true)

      this.$router.afterEach(() => this.navigationOpened = false)
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
