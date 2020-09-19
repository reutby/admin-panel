import { computed } from '@vue/composition-api'

export function usePostContents(editedPost, originalPost) {
  const editorContentsStates = computed(() => {
    if (editedPost.editorContentsStates === null) {
      return originalPost.editorContentsStates || ['editor']
    }
    return editedPost.editorContentsStates
  })

  function getCurrent() {
    const contents = editedPost.contents || originalPost.contents
    return { contents, editorContentsStates: editorContentsStates.value }
  }

  const contents = computed(() => {
    const states = editorContentsStates.value
    const contents = (editedPost.contents === null ? originalPost.contents : editedPost.contents) || [null]
    return contents.map((content, index) => {
      return {
        content,
        index,
        state: states[index] || 'editor',
      }
    })
  })

  function setContent(index, html) {
    editedPost.contents = editedPost.contents !== null ? [...editedPost.contents] : [...(originalPost.contents || [])]
    editedPost.contents[index] = html
  }

  function setContentsStates(index, type) {
    editedPost.editorContentsStates = [].concat(editedPost.editorContentsStates || originalPost.editorContentsStates || [])
    editedPost.editorContentsStates[index] = type
  }

  function removeContent(index) {
    const { contents, editorContentsStates } = getCurrent()

    contents.splice(index, 1)
    editorContentsStates.splice(index, 1)

    editedPost.contents = contents
    editedPost.editorContentsStates = editorContentsStates
  }

  function addContent() {
    const { contents, editorContentsStates } = getCurrent()

    contents.push('')
    editorContentsStates.push('editor')

    editedPost.contents = contents
    editedPost.editorContentsStates = editorContentsStates
  }

  return {
    editorContentsStates,
    contents,
    setContent,
    setContentsStates,
    removeContent,
    addContent
  }
}
