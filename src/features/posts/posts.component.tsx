import { FC } from 'react'

import posts from './markdown'
import PostsTile from './postsTile.component'

const Posts: FC = () => (
    <section>
        {Object.keys(posts).map((id: string) => {
            return <PostsTile key={id} id={id} post={posts[id]} />
        })}
    </section>
)

export default Posts
