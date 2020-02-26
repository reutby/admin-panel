<template>
	<div class="edit-post-page">
		<h1>Edit Post</h1>
		<PostForm v-if="post" :post="post" :submitting="submitting" @submit="save"/>
	</div>
</template>
<script>
  import PostForm from './components/PostForm'
  import { useEditPost } from './compositions/posts'

  export default {
    name: 'EditPost',
    components: { PostForm },
    setup (_, { root: { $route: { params } } }) {
      return useEditPost(params.postId)
    }
  }
</script>
