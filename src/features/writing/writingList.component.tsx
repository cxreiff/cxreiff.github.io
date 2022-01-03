import { FC } from 'react'

import posts from './posts'
import WritingListTile from './writingListTile.component'

import * as styles from './writingList.module.scss'

const WritingList: FC = () => (
    <section className={styles.writing_list}>
        <header>
            <h2>
                Writing
            </h2>
        </header>
        {Object.keys(posts).map((id: string) => {
            return <WritingListTile key={id} id={id} post={posts[id]} />
        })}
    </section>
)

export default WritingList
