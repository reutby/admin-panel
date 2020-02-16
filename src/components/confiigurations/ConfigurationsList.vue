<template>
	<div>
		<table>
			<thead>
			<tr>
				<th>Name</th>
				<th>Public</th>
				<th>Path</th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="config in list" :key="config.key">
				<td>
					<router-link :to="{name: 'editConfiguration', params: {key: config.key}}">{{config.key}}
					</router-link>
				</td>
				<td><i v-if="config.public" class="el-icon-check"/></td>
				<td>{{config.description}}</td>
			</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
  import { Vue, Component } from 'vue-property-decorator'
  import { createNamespacedHelpers } from 'vuex'
  import {
    CONFIGURATIONS_ACTIONS,
    CONFIGURATIONS_MODULE_NAME,
    CONFIGURATIONS_STATE
  } from '../../store/configurations/consts'

  const { mapActions, mapState } = createNamespacedHelpers(CONFIGURATIONS_MODULE_NAME)

  @Component({
    methods: mapActions({ fetch: CONFIGURATIONS_ACTIONS.FETCH_CONFIGURATIONS }),
    computed: mapState({ list: CONFIGURATIONS_STATE.CONFIGURATIONS })
  })
  export default class ConfigurationsList extends Vue {
    created () {
      this.fetch()
    }
  }
</script>
<style scoped lang="scss">
	table {
		width: 100%;
	}

	tr, td {
		text-align: center;
		border: 1px solid #eee;
	}
</style>
