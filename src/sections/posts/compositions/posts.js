import { computed, reactive, ref } from '@vue/composition-api'
import debounce from 'lodash.debounce'
import api from '../../../plugins/api'

export function useCreatePost () {
  const submitting = ref(false)

  return {
    submitting,
    save: (post) => {
      submitting.value = true
      return api.withData
        .post('/api/posts', post)
        .then(post => {
          return post
        })
        .finally(() => submitting.value = false)
    }
  }
}

function fetchPosts () {
  return api.withData.get('/api/posts', { params: { populate: ['categories'] } })
}

function fetchPost (postId) {
  return api.withData.get('/api/posts/' + postId)
}

export function useEditPost (postId) {
  const data = reactive({ post: null, submitting: false })
  fetchPost(postId).then(post => data.post = post)

  return {
    submitting: computed(() => data.submitting),
    post: computed(() => data.post),
    save: (updatedPost) => {
      data.submitting = true
      return api.withData
        .put('/api/posts/' + data.post._id, updatedPost)
        .then(post => {
          data.submitting = false
          data.post = post
        })
    }
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
      .get('/api/posts', { params: { populate: ['categories'], lean: true, q: selectedPost.title } })
      .then(list => searchPostsList.value = list)
  }

  return {
    search: debounce(search, 500),
    selectedPost,
    searchPostsList
  }
}
