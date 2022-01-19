import { FC } from 'react'

import posts from './markdown'
import PostsListTile from './postsListTile.component'

import * as styles from './postsList.module.scss'

const PostsList: FC = () => (
    <section className={styles.posts_list}>
        <header>
            <h2>
                Posts
            </h2>
        </header>
        {Object.keys(posts).map((id: string) => {
            return <PostsListTile key={id} id={id} post={posts[id]} />
        })}
    </section>
)

export default PostsList
