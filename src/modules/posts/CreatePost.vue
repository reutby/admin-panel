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
  import { removeUnsavedChanges } from './compositions/unsaved-changes'

  export default {
    name: 'CreatePost',
    components: { PageTitle, PostForm },
    setup(_, { root: { $router } }) {
      const { submitting, submit } = useCreatePost()
      return {
        submitting,
        submit: async (updatedPost) => {
          try {
            const { _id } = await submit(updatedPost)
            removeUnsavedChanges()
            $router.push({
              name: 'editPost',
              params: { postId: _id }
            })
          } catch (e) {
            //
          }
        }
      }
    }
  }
</script>
