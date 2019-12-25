<template>
	<el-form class="post-form" @submit.native.prevent="submit">
		<el-checkbox :checked="isPublic" @change="editedPost.isPublic = $event">Public Post</el-checkbox>

		<FormInput title="Title" :value="title" @input="editedPost.title = $event"/>
		<FormInput title="Path" label="leave empty to auto-generate"
		           :value="path" @input="editedPost.path = $event"/>

		<FormInput title="Thumbnail"
		           :value="editedPost.thumbnail || post.thumbnail" placeholder="https://"
		           @input="editedPost.thumbnail = $event">
			<div><img class="thumbnail-image" :src="editedPost.thumbnail || post.thumbnail"></div>
		</FormInput>

		<el-form-item label="Category">
			<CategorySelector :value="categoryPath" @change="editedPost.category = $event"
			                  @mounted="mountCategory"/>
		</el-form-item>

		<FormInput title="Tags" v-model="currentTagText" @keypress.native.enter="addTag" placeholder="ADD NEW TAG">
			<ul>
				<li v-for="tag in tags" :key="tag">
					{{tag}}
					<i @click="removeTag(tag)" class="el-icon-delete"/>
				</li>
			</ul>
		</FormInput>

		<el-form-item label="Short" class="form-item-flex">
			<div>
				<gp-editor :value="post.short" @input="editedPost.short = $event"/>
			</div>
		</el-form-item>

		<el-form-item label="Content" class="form-item-flex">
			<div>
				<template v-for="(content, index) in contents">
					<gp-editor :key="index" :value="content" @input="setContent(index, $event)"/>
				</template>
			</div>
		</el-form-item>

		<el-button native-type="submit" :loading="submitting">SAVE</el-button>
	</el-form>
</template>
<script>
  import { Vue, Component, Prop } from 'vue-property-decorator'
  import FormInput from '../forms/FormInput'
  import CategorySelector from '../categories/CategorySelector'
  import { clearNulls } from '../../helpers/clear-nulls'

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

    currentTagText = '';

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
      this.currentTagText = ''
    }

    removeTag (tag) {
      this.editedPost.tags = this.tags.filter(t => t !== tag)
    }

    submit () {
      this.$emit('submit', clearNulls(this.editedPost))
    }
  }
</script>
<style scoped lang="scss">

	.post-form {
		padding: 0 10px;
		margin-bottom: 20px;
	}

	.form-item-flex {
		display: flex;
		flex-direction: column;

		/deep/ .el-form-item__label {
			text-align: left;
		}
	}

	.thumbnail-image {
		max-width: 100px;
	}
</style>
