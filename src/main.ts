import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style/main.scss'
import './plugins/editor'
import './plugins/element'
import './plugins/composition-api'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
