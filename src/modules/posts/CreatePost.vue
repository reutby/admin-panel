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
      const { submitting, submit } = useCreatePost()
      return {
        submitting,
        submit: async (updatedPost) => {
          const { _id } = await submit(updatedPost)
          $router.push({
            name: 'editPost',
            params: { postId: _id }
          })
        }
      }
    }
  }
</script>
