import { FC } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import posts from './posts'

import * as styles from './writingContent.module.scss'

const WritingContent: FC = () => {

    const { id } = useParams<{id: string}>()
    const { content, data: { title, date }} = posts[id]

    return (
        <section className={styles.writing_content}>
            <header>
                <h2>
                    {title}
                </h2>
            </header>
            <footer>
                {new Date(date).toDateString()}
            </footer>
            <ReactMarkdown children={content} />
        </section>
    )
}

export default WritingContent
