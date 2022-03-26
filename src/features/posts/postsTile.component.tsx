import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { Card } from '~/src/common/card/card.component'
import { Post } from './markdown'

type PostsTileProps = {
    id: string,
    post: Post,
}

const PostsTile: FC<PostsTileProps> = ({ id, post }) => {

    const navigate = useNavigate()

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

export default PostsTile
