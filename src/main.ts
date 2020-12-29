import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style/main.scss'
import './plugins/editor'
import './plugins/element'
import './plugins/composition-api'
import { i18n } from './plugins/i18n'

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
