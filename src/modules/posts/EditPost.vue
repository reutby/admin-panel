<template>
	<div class="edit-post-page" v-if="post">
		<PageTitle title="Edit Post" :item-name="post.title"/>
		<PostForm :post="post" :submitting="submitting" @submit="save"/>
	</div>
</template>
<script>
  import PostForm from './components/PostForm'
  import { useEditPost } from './compositions/posts'
  import PageTitle from '../core/components/semantics/PageTitle'

  export default {
    name: 'EditPost',
    components: { PageTitle, PostForm },
    setup (_, { root: { $route: { params } } }) {
      return useEditPost(params.postId)
    }
  }
</script>
