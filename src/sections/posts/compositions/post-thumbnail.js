import { computed, ref } from '@vue/composition-api'

export function usePostThumbnail (editedPost, originalPost) {
  const uploadThumbnailOpen = ref(false)
  const uploadStorage = ref(null)

  const thumbnail = computed({
    get: () => editedPost.thumbnail || originalPost.thumbnail,
    set: url => editedPost.thumbnail = url
  })

  return {
    uploadStorage,
    thumbnail,
    uploadThumbnailOpen,
    toggleUpload () {
      uploadThumbnailOpen.value = !uploadThumbnailOpen.value
    },
    uploadComplete (res) {
      thumbnail.value = res.publicUrl
      uploadThumbnailOpen.value = false
    }
  }
}
