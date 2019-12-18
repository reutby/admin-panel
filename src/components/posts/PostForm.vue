<template>
	<form class="post-form" @submit.prevent="submit">
		<FormInput title="Title" :value="title" @input="editedPost.title = $event.target.value"/>
		<FormInput title="Path" label="leave empty to auto-generate"
		           :value="path" @input="editedPost.path = $event.target.value"/>

		<FormInput title="Thumbnail"
		           :value="editedPost.thumbnail || post.thumbnail" placeholder="https://"
		           @input="editedPost.thumbnail = $event.target.value">
			<div><img class="thumbnail-image" :src="editedPost.thumbnail || post.thumbnail"></div>
		</FormInput>

		<el-checkbox :checked="isPublic" @change="editedPost.isPublic = $event">Public Post</el-checkbox>
		<p>
			<label>
				Category:
				<CategorySelector :value="categoryPath" @change="editedPost.category = $event"
				                  @mounted="mountCategory"/>
			</label>
		</p>

		<FormInput title="Tags" @keypress.enter="addTag" placeholder="ADD NEW TAG">
			<ul>
				<li v-for="tag in tags" :key="tag">
					{{tag}}
					<i @click="removeTag(tag)" class="el-icon-delete"/>
				</li>
			</ul>
		</FormInput>

		<p>
			<label>
				Short:
				<gp-editor :value="post.short" @input="editedPost.short = $event"/>
			</label>
		</p>

		<p>
			<label>
				Content:
				<template v-for="(content, index) in contents">
					<gp-editor :key="index" :value="content" @input="setContent(index, $event)"/>
				</template>
			</label>
		</p>

		<el-button native-type="submit" :loading="submitting">SAVE</el-button>
	</form>
</template>
<script>
  import { Vue, Component, Prop } from 'vue-property-decorator'
  import FormInput from '../forms/FormInput'
  import CategorySelector from '../categories/CategorySelector'

  @Component({
    components: { CategorySelector, FormInput }
  })
  export default class PostForm extends Vue {
    @Prop(Object) post
    @Prop(Boolean) submitting

    editedPost = {
      title: null,
      authors: null,
      thumbnail: null,
      short: null,
      contents: null,
      path: null,
      tags: null,
      category: null,
      isPublic: null,
    }

    mounted () {
      if (!this.post._id) {
        this.editedPost.isPublic = true
      }
    }

    get title () {
      return this.editedPost.title === null ? this.post.title : this.editedPost.title
    }

    get path () {
      return this.editedPost.path === null ? this.post.path : this.editedPost.path
    }

    get tags () {
      const editedTags = this.editedPost.tags
      const tags = this.post.tags
      return editedTags || tags || []
    }

    get contents () {
      if (this.editedPost.contents === null) {
        return this.post.contents
      }
      return this.editedPost.contents
    }

    get categoryPath () {
      return this.editedPost.category || (this.post.category && this.post.category.path)
    }

    get isPublic () {
      const isBool = typeof this.editedPost.isPublic === 'boolean'
      return isBool ? this.editedPost.isPublic : this.post.isPublic
    }

    setContent (index, html) {
      this.editedPost.contents = this.editedPost.contents || [...this.post.contents]
      this.editedPost.contents[index] = html
    }

    mountCategory (path) {
      if (!this.post._id) {
        this.editedPost.category = path
      }
    }

    addTag (event) {
      event.preventDefault()
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
<style scoped>
	.thumbnail-image {
		max-width: 100px;
	}
</style>
