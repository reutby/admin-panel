<template>
	<div class="posts-page">
		<h1>Posts</h1>
		<p>
			<router-link :to="{name: 'createPost'}" tag="button">+ Add new Post</router-link>
		</p>
		<PostsList/>
	</div>
</template>
<script>
  import { Vue, Component } from 'vue-property-decorator'
  import PostsList from '../../components/posts/PostsList'

  @Component({
    components: { PostsList }
  })
  export default class Posts extends Vue {
  }
</script>
