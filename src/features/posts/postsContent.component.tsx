import { FC } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import { useAppSelector } from '~/src/app/store'
import { Theme } from '~/src/features/theme/theme.slice'
import { Card } from '~/src/common/card/card.component'
import { SyntaxHighlighter, styleLight, styleDark } from '~/src/utilities/syntaxHighlighter'

import posts from './markdown'
import styles from './postsContent.module.scss'

const PostsContent: FC = () => {

    const { id = '' } = useParams<{id: string}>()
    const { content, data: { title, date }} = posts[id]

    const theme = useAppSelector((state) => state.theme.theme)

    return (
        <section>
            <Card
                primary={title}
                secondary={<time>{new Date(date).toDateString()}</time>}
            />
            <ReactMarkdown
                className={styles.posts_content}
                children={content}
                components={{
                    code({ inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '')
                        return (
                            <SyntaxHighlighter
                                className={styles.posts_content_code}
                                children={String(children).replace(/\n$/, '')}
                                style={theme === Theme.DARKMODE ? styleDark : styleLight}
                                language={(!inline && match) ? match[1] : 'text'}
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
