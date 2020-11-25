<template>
	<div class="categories-page">
		<PageTitle title="Blocks"/>
    <BlocksList/>
	</div>
</template>
<script lang="ts">
  import PageTitle from '@/modules/core/components/semantics/PageTitle.vue'
  import BlocksList from '@/modules/blocks/components/BlocksList.vue'

  export default {
    name: 'Blocks',
    components: { BlocksList, PageTitle }
  }
</script>
