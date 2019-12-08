import Vue from 'vue'
import Vuex from 'vuex'
import { authModule } from './auth'
import { menusModule } from './menus'
import { categoriesModule } from './categories'
import { assetsModule } from './assets'
import { postsModule } from './posts'
import { usersModule } from './users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    [authModule.name]: authModule,
    [menusModule.name]: menusModule,
    [categoriesModule.name]: categoriesModule,
    [assetsModule.name]: assetsModule,
    [postsModule.name]: postsModule,
    [usersModule.name]: usersModule
  },
  state: {}
})
