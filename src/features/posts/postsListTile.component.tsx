import { FC } from 'react'
import { push } from 'connected-react-router'

import { useAppDispatch } from '~/src/app/store'

import { Post } from './markdown'

import * as styles from './postsListTile.module.scss'

type PostsListTileProps = {
    id: string,
    post: Post,
}

const PostsListTile: FC<PostsListTileProps> = ({ id, post }) => {

    const dispatch = useAppDispatch()
    const navigate = (pathname: string) => dispatch(push(pathname))

    const { data: { title, description, date }} = post

    return (
        <article className={styles.posts_list_tile} onClick={() => navigate(`/posts/${id}`)}>
            <header>
                <h2>
                    {title}
                </h2>
            </header>
            <footer>
                {new Date(date).toDateString()}
            </footer>
            <p>
                {description}
            </p>
        </article>
    )
}

export default PostsListTile
