<template>
	<div class="edit-post-page">
		<h1>Edit Post</h1>
		<PostForm v-if="post" :post="post" :submitting="submitting" @submit="save"/>
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
    methods: mapActions({ fetch: POSTS_ACTIONS.FETCH_POST, updatePost: POSTS_ACTIONS.UPDATE_CURRENT_POST }),
    computed: mapState({ post: POSTS_STATE.CURRENT_POST, submitting: POSTS_STATE.SUBMITTING }),
  })
  export default class EditPost extends Vue {
    save (data) {
      this.updatePost(data)
    }

    created () {
      this.fetch(this.$route.params.postId)
    }
  }
</script>
