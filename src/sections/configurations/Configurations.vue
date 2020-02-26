<template>
	<div class="categories-page">
		<h1>Configurations</h1>
		<ConfigurationsList/>
	</div>
</template>
<script>
  import ConfigurationsList from './components/ConfigurationsList'

  export default {
    components: { ConfigurationsList }
  }
</script>
