<template>
  <div>
    <div>
      <label>Storage </label>
      <AssetsStorageSelector @change="selectedStorage = $event._id" />
    </div>
    <BasicFileUploader
      v-if="selectedStorage"
      :storage="selectedStorage"
      @upload="uploadComplete"
    />
  </div>
</template>
<script>
  import AssetsStorageSelector from './AssetsStorageSelector'
  import BasicFileUploader from './BasicFileUploader'
  import { ref } from '@vue/composition-api'

  export default {
    name: 'AssetUploader',
    components: { BasicFileUploader, AssetsStorageSelector },
    setup(_, { emit }) {
      const selectedStorage = ref(null)

      return {
        selectedStorage,
        uploadComplete({ publicUrl }) {
          emit('change', publicUrl)
        }
      }
    }
  }
</script>
