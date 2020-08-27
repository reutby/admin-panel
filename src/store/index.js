import Vue from 'vue'
import Vuex from 'vuex'
import { authModule } from './auth'
import { configurationsModule } from './configurations'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    [authModule.name]: authModule,
    [configurationsModule.name]: configurationsModule,
  },
  state: {}
})
