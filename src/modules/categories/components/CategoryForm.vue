<template>
  <el-form class="category-form" @submit.native.prevent="submit">
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
    <el-form-item label="Content" class="form-item-flex">
      <div>
        <gp-editor :value="content" @input="editedCategory.content = $event" />
      </div>
    </el-form-item>
    <el-button native-type="submit" :loading="submitting">SAVE</el-button>
  </el-form>
</template>
<script>
  import FormInput from '../../core/components/forms/FormInput'
  import { clearNulls } from '../../core/utils/clear-nulls'
  import { useCategoryForm } from '../compositions/categories'

  export default {
    name: 'CategoryForm',
    components: { FormInput },
    props: {
      category: Object,
      submitting: Boolean
    },
    setup(props, { emit }) {
      const data = useCategoryForm(props)

      return {
        ...data,
        submit: () => emit('submit', clearNulls(data.editedCategory))
      }
    }
  }
</script>
<style scoped></style>
