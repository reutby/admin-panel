<template>
	<div class="admin-panel" v-if="isLoaded">
		<Header class="header"/>
		<div class="admin-content">
			<Navigation class="navigation"/>
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
        }
      })

      this[AUTH_ACTIONS.FETCH_USER]()
        .then(() => this.isLoaded = true)
    }
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
