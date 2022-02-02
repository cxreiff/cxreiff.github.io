import { FC } from 'react'

import posts from './markdown'
import PostsListTile from './postsListTile.component'

const PostsList: FC = () => (
    <section>
        {Object.keys(posts).map((id: string) => {
            return <PostsListTile key={id} id={id} post={posts[id]} />
        })}
    </section>
)

export default PostsList
