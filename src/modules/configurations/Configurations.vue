<template>
	<div class="categories-page">
		<PageTitle title="Configurations"/>
		<ConfigurationsList/>
	</div>
</template>
<script>
  import ConfigurationsList from './components/ConfigurationsList'
  import PageTitle from '../core/components/semantics/PageTitle'

  export default {
    components: { PageTitle, ConfigurationsList }
  }
</script>
