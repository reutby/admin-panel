<template>
	<el-form @submit.native.prevent="updateMenu">
		<el-button @click="addLink" native-type="button">ADD</el-button>
		<MenuLinkInput v-for="(item, $index) in links" :value="item" :key="$index"
		               @remove="removeLink"
		               @change="updateLink"/>
		<el-button native-type="submit">SAVE</el-button>
	</el-form>
</template>
<script>
  import { Vue, Component, Prop } from 'vue-property-decorator'
  import { createNamespacedHelpers } from 'vuex'
  import { MENUS_MODULE_NAME, MENUS_ACTIONS, MENUS_GETTERS } from '../../store/menus/consts'
  import MenuLinkInput from './MenuLinkInput'

  const { mapActions, mapGetters } = createNamespacedHelpers(MENUS_MODULE_NAME)

  @Component({
    components: { MenuLinkInput },
    methods: mapActions({
      fetch: MENUS_ACTIONS.FETCH_MENU,
      updateLinks: MENUS_ACTIONS.UPDATE_MENU_LINKS,
      updateMenu: MENUS_ACTIONS.UPDATE_CURRENT_MENU
    }),
    computed: mapGetters({ links: MENUS_GETTERS.CURRENT_MENU_LINKS })
  })
  export default class MenuEditor extends Vue {
    links
    @Prop(String) menu

    created () {
      this.fetch(this.menu)
    }

    updateLink (link) {
      this.updateLinks(this.links.map(l => l._id === link._id ? link : l))
    }

    removeLink (item) {
      this.updateLinks(this.links.filter(l => l !== item))
    }

    addLink () {
      this.updateLinks([...this.links, { kind: 'category' }])
    }
  }
</script>
<style scoped lang="scss">

</style>
