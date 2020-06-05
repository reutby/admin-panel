<template>
	<div class="create-post-page">
		<PageTitle title="Create Post"/>
		<PostForm :post="{}" :submitting="submitting" @submit="submit"/>
	</div>
</template>
<script>
  import PostForm from './components/PostForm'
  import { useCreatePost } from './compositions/posts'
  import PageTitle from '../core/components/semantics/PageTitle'

  export default {
    name: 'CreatePost',
    components: { PageTitle, PostForm },
    setup (_, { root: { $router } }) {
      const { submitting, save } = useCreatePost()
      return {
        submitting,
        async submit (updatedPost) {
          const { _id } = await save(updatedPost)
          $router.push({
            name: 'editPost',
            params: { postId: _id }
          })
        }
      }
    }
  }
</script>
