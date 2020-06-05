<template>
	<el-form class="post-form" @submit.native.prevent="submit">
		<el-checkbox :checked="isPublic" @change="editedPost.isPublic = $event">Public Post</el-checkbox>

		<FormInput title="Title" :value="title" @input="editedPost.title = $event"/>
		<FormInput title="Path" label="leave empty to auto-generate"
		           :value="path" @input="editedPost.path = $event"/>

		<el-form-item label="Thumbnail">
			<a @click="toggleUpload">Upload</a>
			<template v-if="uploadThumbnailOpen">
				<div>
					<label>Storage </label>
					<AssetsStorageSelector @change="uploadStorage = $event._id"/>
				</div>
				<BasicFileUploader v-if="uploadStorage" :storage="uploadStorage" @upload="uploadComplete"/>
			</template>
			<FormInput v-else :value="thumbnail" placeholder="https://"
			           @input="thumbnail = $event">
			</FormInput>
			<div>
				<img v-if="!uploadThumbnailOpen" class="thumbnail-image" :src="editedPost.thumbnail || post.thumbnail">
			</div>
		</el-form-item>

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
			<div class="post-contents">
				<PostContentEditor v-for="item in contents"
				                   :key="item.index"
				                   :value="item.content"
				                   :state="item.state"
				                   @remove="removeContent(item.index)"
				                   @contentChange="setContent(item.index, $event)"
				                   @typeChange="setContentsStates(item.index, $event)"/>
				<el-button native-type="button" type="text" icon="el-icon-plus" @click="addContent"/>
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
  import BasicFileUploader from '../../assets/components/BasicFileUploader'
  import { usePostThumbnail } from '../compositions/post-thumbnail'
  import AssetsStorageSelector from '../../assets/components/AssetsStorageSelector'

  export default {
    components: { AssetsStorageSelector, BasicFileUploader, PostContentEditor, CategorySelector, FormInput },
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
        ...usePostThumbnail(editedPost, props.post),
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

	.post-contents {
		display: flex;
		flex-direction: column;
		align-items: center;

		.content-editor {
			width: 100%;
			margin-bottom: 5px;
		}
	}
</style>
