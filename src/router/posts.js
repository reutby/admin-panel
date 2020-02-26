import EditPost from '../sections/posts/EditPost.vue'
import CreatePost from '../sections/posts/CreatePost.vue'
import EmptyRoute from '../sections/core/components/layout/EmptyRoute.vue'
import Posts from '../sections/posts/Posts'

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
