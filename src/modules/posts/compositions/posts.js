import { reactive, ref } from '@vue/composition-api'
import debounce from 'lodash.debounce'
import { api, getCallData } from '@/services/api'
import { useSubmitting } from '../../core/compositions/submitting'
import { removeUnsavedChanges } from './unsaved-changes'

export function useCreatePost() {
  return useSubmitting((post) => {
    return api
      .post('/api/posts', post)
      .then(post => {
        return post
      })
      .then(getCallData)
  }, { success: 'Post created successfully', error: 'Failed to create post' })
}

function fetchPosts() {
  return api.get('/api/posts', { params: { populate: ['category'] } }).then(getCallData)
}

function fetchPost(postId) {
  return api.get('/api/posts/' + postId).then(getCallData)
}

export function useEditPost(postId) {
  const post = ref(null)
  fetchPost(postId).then(data => post.value = data)

  return {
    ...useSubmitting((updatedPost) => {
      return api
        .put('/api/posts/' + post.value._id, updatedPost)
        .then(getCallData)
        .then(post => {
          post.value = post
          removeUnsavedChanges(post._id)
        })
    }, { success: 'Post updated successfully', error: 'Failed to update post' }),
    post,
  }
}

export function useNewPost() {
  return {
    post: reactive({
      title: null,
      authors: null,
      thumbnail: null,
      short: null,
      contents: null,
      editorContentsStates: null,
      path: null,
      tags: null,
      category: null,
      isPublic: null,
    })
  }
}

export function usePostsList() {
  const posts = ref([])

  fetchPosts().then(list => posts.value = list)

  return {
    posts,
    remove: (postId) => api
      .delete('/api/posts/' + postId)
      .then(() => posts.value = posts.value.filter(({ _id }) => _id !== postId))
  }
}

export function usePostsSearch() {
  const searchPostsList = ref([])
  const selectedPost = reactive({
    title: '',
    value: ''
  })

  function search() {
    return api.get('/api/posts', { params: { populate: ['category'], lean: true, q: selectedPost.title } })
      .then(getCallData)
      .then(list => searchPostsList.value = list)
  }

  return {
    search: debounce(search, 500),
    selectedPost,
    searchPostsList
  }
}
