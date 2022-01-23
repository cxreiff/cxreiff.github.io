import { FC } from 'react'
import { push } from 'connected-react-router'

import { useAppDispatch } from '~/src/app/store'
import { Card } from '~/src/common/card/card.component'

import { Post } from './markdown'

type PostsListTileProps = {
    id: string,
    post: Post,
}

const PostsListTile: FC<PostsListTileProps> = ({ id, post }) => {

    const dispatch = useAppDispatch()
    const navigate = (pathname: string) => dispatch(push(pathname))

    const { data: { title, description, date }} = post

    return (
        <Card
            onClick={() => navigate(`/posts/${id}`)}
            primary={title}
            secondary={new Date(date).toDateString()}
            tertiary={description}
        />
    )
}

export default PostsListTile
