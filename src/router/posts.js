import EditPost from '../views/posts/EditPost.vue'
import CreatePost from '../views/posts/CreatePost.vue'
import EmptyRoute from '../components/layout/EmptyRoute.vue'
import Posts from '../views/posts/Posts'

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
