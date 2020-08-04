import { reactive, ref } from '@vue/composition-api'
import debounce from 'lodash.debounce'
import api from '../../../plugins/api'
import { useSubmitting } from '../../core/compositions/submitting'
import { removeUnsavedChanges } from './unsaved-changes'

export function useCreatePost () {
  return useSubmitting((post) => {
    return api.withData
      .post('/api/posts', post)
      .then(post => {
        return post
      })
  }, { success: 'Post created successfully', error: 'Failed to create post' })
}

function fetchPosts () {
  return api.withData.get('/api/posts', { params: { populate: ['category'] } })
}

function fetchPost (postId) {
  return api.withData.get('/api/posts/' + postId)
}

export function useEditPost (postId) {
  const post = ref(null)
  fetchPost(postId).then(data => post.value = data)

  return {
    ...useSubmitting((updatedPost) => {
      return api.withData
        .put('/api/posts/' + post.value._id, updatedPost)
        .then(post => {
          post.value = post
          removeUnsavedChanges(post._id)
        })
    }, { success: 'Post updated successfully', error: 'Failed to update post' }),
    post,
  }
}

export function useNewPost () {
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

export function usePostsList () {
  const posts = ref([])

  fetchPosts().then(list => posts.value = list)

  return {
    posts,
    remove: (postId) => api
      .delete('/api/posts/' + postId)
      .then(() => posts.value = posts.value.filter(({ _id }) => _id !== postId))
  }
}

export function usePostsSearch () {
  const searchPostsList = ref([])
  const selectedPost = reactive({
    title: '',
    value: ''
  })

  function search () {
    return api.withData
      .get('/api/posts', { params: { populate: ['category'], lean: true, q: selectedPost.title } })
      .then(list => searchPostsList.value = list)
  }

  return {
    search: debounce(search, 500),
    selectedPost,
    searchPostsList
  }
}
