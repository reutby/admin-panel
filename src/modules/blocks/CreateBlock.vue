<template>
  <div class="block-page">
    <PageTitle title="Create Block" />
    <BlockForm :block="{}" @submit="submit" />
  </div>
</template>
<script>
  import BlockForm from './components/BlockForm'
  import { createBlock } from './compositions/blocks'
  import PageTitle from '../core/components/semantics/PageTitle'
  import { removeUnsavedChanges } from '@/modules/drafts/compositions/unsaved-changes.ts'
  import { defineComponent, getCurrentInstance } from '@vue/composition-api'

  export default defineComponent({
    name: 'CreateBlock',
    components: { PageTitle, BlockForm },
    setup() {
      const { $router } = getCurrentInstance()
      async function submit(data) {
        const { name, description } = await createBlock(data)
        removeUnsavedChanges('block')
        $router.push({
          name: 'editBlock',
          params: { blockName: name, blockDescription: description }
        })
      }

      return {
        submit
      }
    }
  })
</script>
