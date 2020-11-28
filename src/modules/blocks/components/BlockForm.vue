<template>
  <el-form class="block-form" @submit.native.prevent="submit">
    <FormInput
      title="Name"
      :value="name"
      @input="editedCategory.name = $event"
    />
    <FormInput
      title="Description"
      label="leave empty to auto-generate"
      :value="description"
      @input="editedBlock.description = $event"
    />
    <el-button native-type="submit" :loading="submitting">SAVE</el-button>
  </el-form>
</template>
<script>
  import FormInput from '../../core/components/forms/FormInput'
  import { clearNulls } from '../../core/utils/clear-nulls'
  import { useBlockForm } from '../compositions/blocks'
  import { useEditorConfig } from '@/modules/posts/compositions/gp-editor'
  import { useUnsavedChanges } from '@/modules/drafts/compositions/unsaved-changes.ts'
  import { computed } from '@vue/composition-api'

  export default {
    name: 'BlockForm',
    components: { FormInput },
    props: {
      block: Object,
      submitting: Boolean
    },
    setup(props, { emit }) {
      const data = useBlockForm(props)

      useUnsavedChanges('block', props.block._id, computed(() => props.block.name), data.editedBlock)

      return {
        ...data,
        ...useEditorConfig(),
        submit: () => emit('submit', clearNulls(data.editedBlock))
      }
    }
  }
</script>
<style scoped></style>
