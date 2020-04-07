import Vue from 'vue'
import Vuex from 'vuex'
import { authModule } from './auth'
import { menusModule } from './menus'
import { categoriesModule } from './categories'
import { usersModule } from './users'
import { configurationsModule } from './configurations'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    [authModule.name]: authModule,
    [configurationsModule.name]: configurationsModule,
    [menusModule.name]: menusModule,
    [categoriesModule.name]: categoriesModule,
    [usersModule.name]: usersModule
  },
  state: {}
})
