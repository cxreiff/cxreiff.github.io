import { h, FunctionalComponent } from 'preact'
import { push } from 'connected-react-router'

import { useAppSelector, useAppDispatch } from '~/src/app/store'

import { Post } from './posts'

import * as style from './writingListTile.module.scss'

interface WritingListTileProps {
    id: string,
    post: Post,
}

const WritingListTile: FunctionalComponent<WritingListTileProps> = ({ id, post }) => {

    const dispatch = useAppDispatch()
    const navigate = (pathname: string) => dispatch(push(pathname))

    const {title, description, date, content} = post

    return (
        <article className={style.main} onClick={() => navigate('/writing/' + id)}>
            <header>
                <h2>
                    {title}
                </h2>
            </header>
            <footer>
                {date.toDateString()}
            </footer>
            <p>
                {description}
            </p>
        </article>
    )
}

export default WritingListTile
