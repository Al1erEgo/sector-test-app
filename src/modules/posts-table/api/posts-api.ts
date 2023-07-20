import { commonInstance } from '@/common'
import { PostType } from '@/modules/posts-table/types'

export const postsApi = {
  getPosts() {
    return commonInstance.get<PostType[]>('posts')
  },
}
