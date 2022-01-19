import { FC, CSSProperties } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import { SyntaxHighlighter, syntaxStyle } from '~/src/utilities/syntaxHighlighter'

import posts from './markdown'
import * as styles from './postsContent.module.scss'

const PostsContent: FC = () => {

    const { id } = useParams<{id: string}>()
    const { content, data: { title, date }} = posts[id]

    return (
        <section className={styles.posts_content}>
            <header>
                <h2>
                    {title}
                </h2>
            </header>
            <footer>
                {new Date(date).toDateString()}
            </footer>
            <ReactMarkdown
                children={content}
                components={{
                    code({ inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '')
                        return (
                            <SyntaxHighlighter
                                className={styles.posts_content_code}
                                children={String(children).replace(/\n$/, '')}
                                style={syntaxStyle as unknown as CSSProperties}
                                language={(!inline && match) ? match[1] : 'text'}
                                PreTag={'div'}
                                {...props}
                            />
                        )
                    }
                }}
            />
        </section>
    )
}

export default PostsContent
