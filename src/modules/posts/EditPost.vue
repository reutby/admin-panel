<template>
	<div class="edit-post-page" v-if="post">
		<PageTitle title="Edit Post" :item-name="post.title"/>
		<PostForm :post="post" :submitting="submitting" @submit="submit"/>
	</div>
</template>
<script lang="ts">
  import { defineComponent } from '@vue/composition-api'
  import { useEditPost } from './compositions/posts'
  import PostForm from './components/PostForm.vue'
  import PageTitle from '../core/components/semantics/PageTitle.vue'

  export default defineComponent({
    name: 'EditPost',
    components: { PageTitle, PostForm },
    setup(_, { root: { $route: { params } } }) {
      return useEditPost(params.postId)
    }
  })
</script>
