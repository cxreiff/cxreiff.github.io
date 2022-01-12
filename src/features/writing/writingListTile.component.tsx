import { FC } from 'react'
import { push } from 'connected-react-router'

import { useAppDispatch } from '~/src/app/store'

import { Post } from './posts'

import * as styles from './writingListTile.module.scss'

type WritingListTileProps = {
    id: string,
    post: Post,
}

const WritingListTile: FC<WritingListTileProps> = ({ id, post }) => {

    const dispatch = useAppDispatch()
    const navigate = (pathname: string) => dispatch(push(pathname))

    const { data: { title, description, date }} = post

    return (
        <article className={styles.main} onClick={() => navigate(`/writing/${id}`)}>
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

export default WritingListTile
