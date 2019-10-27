<template>
	<form class="post-form" @submit.prevent="submit">
		<FormInput title="Title" :value="post.title" @input="editedPost.title = $event.target.value"/>
		<FormInput title="Path" label="leave empty to auto-generate"
		           :value="post.path" @input="editedPost.path = $event.target.value"/>

		<FormInput title="Tags" @keyup.enter="addTag" placeholder="ADD NEW TAG">
			<ul>
				<li v-for="tag in tags" :key="tag">
					{{tag}}
					<button type="button" @click="removeTag(tag)">X</button>
				</li>
			</ul>
		</FormInput>

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
  import FormInput from '../forms/FormInput'

  @Component({
    components: { FormInput }
  })
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

    get content () {
      if (this.editedPost.content === null) {
        return this.post.content
      }
      return this.editedPost.content
    }

    set content (value) {
      this.editedPost.content = value
    }

    addTag (event) {
      if (this.tags.includes(event.target.value)) {
        return
      }
      this.editedPost.tags = [...this.tags, event.target.value]
      event.target.value = ''
    }

    removeTag (tag) {
      this.editedPost.tags = this.tags.filter(t => t !== tag)
    }

    submit () {
      const onlyUpdated = Object.keys(this.editedPost).reduce((obj, key) => {
        const val = this.editedPost[key]
        if (val !== null) {
          obj[key] = val
        }
        return obj
      }, {})
      this.$emit('submit', onlyUpdated)
    }
  }
</script>
