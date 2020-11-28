<template>
	<div class="categories-page">
		<ListPageTitle title="Blocks" create-route="createBlock"/>
    <BlocksList/>
	</div>
</template>
<script lang="ts">
  import ListPageTitle from '@/modules/core/components/semantics/ListPageTitle.vue'
  import BlocksList from '@/modules/blocks/components/BlocksList.vue'

  export default {
    name: 'Blocks',
    components: { BlocksList, ListPageTitle }
  }
</script>
