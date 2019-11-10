<template>
	<div class="create-post-page">
		<h1>Create Post</h1>
		<PostForm :post="{}" @submit="save"/>
	</div>
</template>
<script>
  import { Vue, Component } from 'vue-property-decorator'
  import { createNamespacedHelpers } from 'vuex'
  import { POSTS_MODULE_NAME, POSTS_ACTIONS, POSTS_STATE } from '../../store/posts/consts'
  import PostForm from '../../components/posts/PostForm'

  const { mapActions, mapState } = createNamespacedHelpers(POSTS_MODULE_NAME)

  @Component({
    components: { PostForm },
    methods: mapActions({ save: POSTS_ACTIONS.CREATE_POST }),
  })
  export default class CreatePost extends Vue {

  }
</script>
