<template>
  <el-form class="category-form" @submit.native.prevent="submit">
    <template v-if="!isHomePage">
      <div>
        <el-checkbox
          label="Public?"
          :size="'small'"
          :checked="isPublic"
          @change="editedCategory.isPublic = $event"
        />
      </div>
      <FormInput
        title="Name"
        :value="name"
        @input="editedCategory.name = $event"
      />
      <FormInput
        title="Path"
        label="leave empty to auto-generate"
        :value="path"
        @input="editedCategory.path = $event"
      />
    </template>
    <el-form-item label="Content" class="form-item-flex">
      <div>
        <gp-editor :value="content" @input="editedCategory.content = $event" :config="editorConfig"/>
      </div>
    </el-form-item>
    <el-button native-type="submit" :loading="submitting">{{$t('SAVE')}}</el-button>
  </el-form>
</template>
<script>
  import FormInput from '@/modules/core/components/forms/FormInput'
  import { clearNulls } from '@/modules/core/utils/clear-nulls'
  import { useCategoryForm } from '../compositions/categories'
  import { useEditorConfig } from '@/modules/posts/compositions/gp-editor'
  import { useUnsavedChanges } from '@/modules/drafts/compositions/unsaved-changes.ts'
  import { computed } from '@vue/composition-api'

  export default {
    name: 'CategoryForm',
    components: { FormInput },
    props: {
      isHomePage: Boolean,
      category: Object,
      submitting: Boolean
    },
    setup(props, { emit }) {
      const data = useCategoryForm(props)

      useUnsavedChanges('category', props.category._id, computed(() => props.category.name), data.editedCategory)

      return {
        ...data,
        ...useEditorConfig(),
        submit: () => emit('submit', clearNulls(data.editedCategory))
      }
    }
  }
</script>
<style scoped></style>
