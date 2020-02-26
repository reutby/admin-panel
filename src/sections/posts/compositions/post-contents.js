import { computed } from '@vue/composition-api'

export function usePostContents (editedPost, originalPost) {
  const editorContentsStates = computed(() => {
    if (editedPost.editorContentsStates === null) {
      return originalPost.editorContentsStates || ['editor']
    }
    return editedPost.editorContentsStates
  })

  const contents = computed(() => {
    const states = editorContentsStates.value
    const contents = (editedPost.contents === null ? originalPost.contents : editedPost.contents) || [null]
    return contents.map((content, index) => {
      return {
        content,
        index,
        state: states[index],
      }
    })
  })

  function setContent (index, html) {
    editedPost.contents = editedPost.contents || [...(originalPost.contents || [])]
    editedPost.contents[index] = html
  }

  function setContentsStates (index, type) {
    editedPost.editorContentsStates = [].concat(editedPost.editorContentsStates || originalPost.editorContentsStates || [])
    editedPost.editorContentsStates[index] = type
  }

  return {
    editorContentsStates,
    contents,
    setContent,
    setContentsStates
  }
}
