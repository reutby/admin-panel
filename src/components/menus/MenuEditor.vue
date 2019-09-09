<template>
	<div>
		<MenuLinkInput v-for="item in links" :value="item" @change="updateLink"/>
	</div>
</template>
<script>
  import { Vue, Component, Prop } from 'vue-property-decorator'
  import { createNamespacedHelpers } from 'vuex'
  import { MENUS_MODULE_NAME, MENUS_ACTIONS, MENUS_GETTERS } from '../../store/menus/consts'
  import MenuLinkInput from './MenuLinkInput'

  const { mapActions, mapGetters } = createNamespacedHelpers(MENUS_MODULE_NAME)

  @Component({
    components: { MenuLinkInput },
    methods: mapActions({ fetch: MENUS_ACTIONS.FETCH_MENU }),
    computed: mapGetters({ links: MENUS_GETTERS.CURRENT_MENU_LINKS })
  })
  export default class MenuEditor extends Vue {
    links
    @Prop(String) menu

    updatedData = null

    created () {
      this.fetch(this.menu)
    }

    updateLink (oldItem, $event) {

    }
  }
</script>
<style scoped lang="scss">

</style>
