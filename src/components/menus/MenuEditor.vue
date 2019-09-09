<template>
	<div>
		<MenuLinkInput v-for="item in data.links" :value="item"/>
	</div>
</template>
<script>
  import { Vue, Component, Prop } from 'vue-property-decorator'
  import { createNamespacedHelpers } from 'vuex'
  import { MENUS_MODULE_NAME, MENUS_ACTIONS, MENUS_STATE } from '../../store/menus/consts'
  import MenuLinkInput from './MenuLinkInput'

  const { mapActions, mapState } = createNamespacedHelpers(MENUS_MODULE_NAME)

  @Component({
    components: { MenuLinkInput },
    methods: mapActions({ fetch: MENUS_ACTIONS.FETCH_MENU }),
    computed: mapState({ data: MENUS_STATE.CURRENT_MENU })
  })
  export default class MenuEditor extends Vue {
    @Prop(String) menu

    created () {
      this.fetch(this.menu)
    }
  }
</script>
<style scoped lang="scss">

</style>
