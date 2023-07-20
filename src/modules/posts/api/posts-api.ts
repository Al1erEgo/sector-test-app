import { commonInstance } from '@/common'
import { PostType } from '@/modules/posts/types'

export const postsApi = {
  getPosts() {
    return commonInstance.get<PostType[]>('posts')
  },
}
