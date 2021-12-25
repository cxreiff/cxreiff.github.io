import React from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import posts from './posts'

const WritingContent: React.FC = () => {

    const { id } = useParams<{id: string}>()
    const { title, date, content } = posts[id]

    return (
        <section>
            <header>
                <h2>
                    {title}
                </h2>
            </header>
            <footer>
                {date.toDateString()}
            </footer>
            <ReactMarkdown children={content.toString()} />
        </section>
    )
}

export default WritingContent
