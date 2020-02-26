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
				<PostContentEditor v-for="item in contents"
				                   :key="item.index"
				                   :value="item.content"
				                   :state="item.state"
				                   @contentChange="setContent(item.index, $event)"
				                   @typeChange="setContentsStates(item.index, $event)"/>
			</div>
		</el-form-item>

		<el-button native-type="submit" :loading="submitting">SAVE</el-button>
	</el-form>
</template>
<script>
  import FormInput from '../../core/components/forms/FormInput'
  import CategorySelector from '../../categories/components/CategorySelector'
  import { clearNulls } from '../../../helpers/clear-nulls'
  import PostContentEditor from './PostContentEditor'
  import { computed, onBeforeMount } from '@vue/composition-api'
  import { usePostTags } from '../compositions/post-tags'
  import { usePostContents } from '../compositions/post-contents'
  import { useNewPost } from '../compositions/posts'
  import { useEditedInputs } from '../../core/compositions/edited-inputs'

  export default {
    components: { PostContentEditor, CategorySelector, FormInput },
    props: {
      post: Object,
      submitting: Boolean
    },
    setup (props, { emit }) {
      const editedPost = useNewPost().post
      const tagsContext = usePostTags(editedPost, props.post)
      const contentsContext = usePostContents(editedPost, props.post)

      onBeforeMount(() => {
        if (!props.post._id) {
          editedPost.isPublic = true
        }
      })

      return {
        ...tagsContext,
        ...contentsContext,
        ...useEditedInputs(editedPost, props.post, ['title', 'path']),
        editedPost,
        categoryPath: computed(() => editedPost.category || (props.post.category && props.post.category.path)),
        isPublic: computed(() => {
          const isBool = typeof editedPost.isPublic === 'boolean'
          return isBool ? editedPost.isPublic : props.post.isPublic
        }),
        mountCategory (path) {
          if (!props.post._id) {
            editedPost.category = path
          }
        },
        submit () {
          emit('submit', clearNulls(editedPost))
        }
      }
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
