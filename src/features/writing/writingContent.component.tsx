import { h, FunctionalComponent } from 'preact'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import posts from './posts'

const WritingContent: FunctionalComponent = () => {

    const { id } = useParams<{id: string}>()
    const { title, description, date, content } = posts[id]

    return (
        <article>
            <header>
                <h2>
                    {title}
                </h2>
            </header>
            <footer>
                {date.toDateString()}
            </footer>
            <ReactMarkdown children={content.toString()} />
        </article>
    )
}

export default WritingContent
