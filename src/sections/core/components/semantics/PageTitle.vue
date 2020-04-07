<template>
	<h1>{{title}}<template v-if="itemName">: <i>{{itemName}}</i></template></h1>
</template>
<script>
  export default {
    name: 'PageTitle',
    props: {
      title: String,
      itemName: String
    }
  }
</script>

<style scoped>
	h1 i {
		color: #00C48D;
	}
</style>
