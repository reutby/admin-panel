<template>
	<div class="create-post-page">
		<h1>Create Post</h1>
		<PostForm :post="{}" :submitting="submitting" @submit="save"/>
	</div>
</template>
<script>
  import PostForm from './components/PostForm'
  import { useCreatePost } from './compositions/posts'

  export default {
    name: 'CreatePost',
    components: { PostForm },
    setup () {
      return useCreatePost()
    }
  }
</script>
