<template>
	<div class="create-post-page">
		<PageTitle title="Create Post"/>
		<PostForm :post="{}" :submitting="submitting" @submit="submit"/>
	</div>
</template>
<script lang="ts">
  import { useCreatePost } from './compositions/posts'
  import { removeUnsavedChanges } from '../drafts/compositions/unsaved-changes'
  import { defineComponent } from '@vue/composition-api'
  import PostForm from './components/PostForm.vue'
  import PageTitle from '../core/components/semantics/PageTitle.vue'

  export default defineComponent({
    name: 'CreatePost',
    components: { PageTitle, PostForm },
    setup(_, { root: { $router } }) {
      const { submitting, submit } = useCreatePost()
      return {
        submitting,
        submit: async (updatedPost) => {
          try {
            const { _id } = await submit(updatedPost)
            removeUnsavedChanges('post')
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
  })
</script>
