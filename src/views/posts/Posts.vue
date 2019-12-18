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
  import { Vue, Component } from 'vue-property-decorator'
  import PostsList from '../../components/posts/PostsList'

  @Component({
    components: { PostsList }
  })
  export default class Posts extends Vue {
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
