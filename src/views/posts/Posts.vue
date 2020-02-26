<template>
	<div class="posts-page">
		<h1>
			<span>Posts</span>
			<el-button type="primary" icon="el-icon-edit" @click="$router.push({name: 'createPost'})"/>
		</h1>
		<PostsList/>
	</div>
</template>
<script>
  import PostsList from '../../components/posts/PostsList'

  export default {
    name: 'Posts',
    components: { PostsList }
  }
</script>
<style scoped lang="scss">
	h1 {
		span {
			margin-right: 20px;
		}

		> * {
			vertical-align: middle;
		}

	}
</style>
