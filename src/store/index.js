import Vue from 'vue'
import Vuex from 'vuex'
import { authModule } from './auth'
import { menusModule } from './menus'
import { categoriesModule } from './categories'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    [authModule.name]: authModule,
    [menusModule.name]: menusModule,
    [categoriesModule.name]: categoriesModule,
  },
  state: {}
})
