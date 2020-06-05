import EditPost from '../modules/posts/EditPost.vue'
import CreatePost from '../modules/posts/CreatePost.vue'
import EmptyRoute from '../modules/core/components/layout/EmptyRoute.vue'
import Posts from '../modules/posts/Posts'

const postsRoutes = {
  path: 'posts',
  redirect: { name: 'posts' },
  component: EmptyRoute,
  children: [
    {
      path: '',
      name: 'posts',
      component: Posts
    },
    {
      path: 'new',
      name: 'createPost',
      component: CreatePost
    },
    {
      path: ':postId',
      name: 'editPost',
      component: EditPost
    }
  ]
}

export default postsRoutes
