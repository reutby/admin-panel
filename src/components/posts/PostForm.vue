<template>
	<form class="post-form" @submit.prevent="submit">
		<p>
			<label>
				Title:
				<input :value="post.title" @input="editedPost.title = $event.target.value">
			</label>
		</p>

		<p>
			<label>
				Path <small>(leave empty to auto-generate)</small>:
				<input :value="post.path" @input="editedPost.path = $event.target.value">
			</label>
		</p>

		<p>
			<label>
				Tags:
				<input @keyup.enter="addTag" placeholder="ADD NEW TAG">
				<ul>
					<li v-for="tag in tags" :key="tag">
						{{tag}}
						<button type="button" @click="removeTag(tag)">X</button>
					</li>
				</ul>
			</label>
		</p>

		<p>
			<label>
				Short:
				<gp-editor :value="post.short" @input="editedPost.short = $event"></gp-editor>
			</label>
		</p>

		<p>
			<label>
				Content:
				<gp-editor v-model="content"></gp-editor>
			</label>
		</p>

		<button>SAVE</button>
	</form>
</template>
<script>
  import { Vue, Component, Prop } from 'vue-property-decorator'

  @Component
  export default class PostForm extends Vue {
    @Prop(Object) post

    editedPost = {
      title: null,
      authors: null,
      short: null,
      content: null,
      path: null,
      tags: null,
      category: null,
    }

    get tags () {
      const editedTags = this.editedPost.tags
      const tags = this.post.tags
      return editedTags || tags
    }

    get content() {
      const editedContent = this.editedPost.content
      const content = this.post.content;
      return editedContent || content
    }
    set content(value) {
      this.editedPost.content = value;
    }

    addTag (event) {
      if (this.tags.includes(event.target.value)) {
        return
      }
      this.editedPost.tags = [...this.tags, event.target.value]
      event.target.value = '';
    }

    removeTag (tag) {
      this.editedPost.tags = this.tags.filter(t => t !== tag)
    }

    submit () {
      this.$emit('submit', this.editedPost)
    }
  }
</script>
