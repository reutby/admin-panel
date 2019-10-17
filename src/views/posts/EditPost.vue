<template>
	<div class="edit-post-page">
		<h1>Edit Post</h1>
		<PostForm v-if="post" :post="post"/>
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
    methods: mapActions({ fetch: POSTS_ACTIONS.FETCH_POST }),
    computed: mapState({post: POSTS_STATE.CURRENT_POST}),
  })
  export default class EditPost extends Vue {
    created () {
      this.fetch(this.$route.params.postId)
    }
  }
</script>
