<template>
	<div>
		{{menus}}
	</div>
</template>
<script>
  import { Vue, Component } from 'vue-property-decorator'
  import { createNamespacedHelpers } from 'vuex'
  import { MENUS_MODULE_NAME, MENUS_ACTIONS, MENUS_STATE } from '../../store/menus/consts'

  const { mapActions, mapState } = createNamespacedHelpers(MENUS_MODULE_NAME)

  @Component({
    methods: mapActions({ fetch: MENUS_ACTIONS.FETCH_MENUS }),
    computed: mapState({ menus: MENUS_STATE.MENUS })
  })
  export default class MenusList extends Vue {
    created () {
      this.fetch()
    }
  }
</script>
<style scoped lang="scss">

</style>
