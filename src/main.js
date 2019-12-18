import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/main.scss'
import { EditorPlugin } from './plugins/editor'
import './plugins/element.js'

Vue.use(EditorPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
