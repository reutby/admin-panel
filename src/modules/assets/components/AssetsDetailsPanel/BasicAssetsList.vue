<template>
  <div v-if="loaded">
    {{ assets }}
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, watch } from '@vue/composition-api'
  import { getAssetInStorage } from '@/modules/assets/compositions/assets'

  export default defineComponent({
    name: 'BasicAssetsList',
    props: {
      storage: {
        type: String,
        required: true
      },
      identifier: {
        type: String,
        default: '/'
      }
    },
    setup(props) {
      const loaded = ref(false)
      const assets = ref([])

      watch(() => props.storage + props.identifier, async () => {
        loaded.value = false
        try {
          assets.value = await getAssetInStorage(props.storage, props.identifier)
        } finally {
          loaded.value = true
        }
      })

      return {
        loaded,
        assets
      }
    }
  })
</script>
