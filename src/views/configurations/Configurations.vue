<template>
	<div class="categories-page">
		<h1>Configurations</h1>
		<ConfigurationsList/>
	</div>
</template>
<script>
  import { Vue, Component } from 'vue-property-decorator'
  import ConfigurationsList from '../../components/confiigurations/ConfigurationsList'

  @Component({
    components: { ConfigurationsList }
  })
  export default class Configurations extends Vue {
  }
</script>
