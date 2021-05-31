import { h, FunctionalComponent } from 'preact'
import { push } from 'connected-react-router'

import { useAppSelector, useAppDispatch } from 'src/app/store'

import { Post } from './posts'

interface WritingListTileProps {
    id: string,
    post: Post,
}

const WritingListTile: FunctionalComponent<WritingListTileProps> = ({ id, post }) => {

    const dispatch = useAppDispatch()
    const navigate = (pathname: string) => dispatch(push(pathname))

    const {title, description, date, content} = post

    return (
        <a onClick={() => navigate('/writing/' + id)}>
            <article>
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
        </a>
    )
}

export default WritingListTile
