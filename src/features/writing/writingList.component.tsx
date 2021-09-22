import React from 'react'

import posts from './posts'
import WritingListTile from './writingListTile.component'

const WritingList: React.FC = () => (
    <section>
        <header>
            <h2>
                Writing
            </h2>
        </header>
        {Object.keys(posts).map((id: string) => {
            return <WritingListTile id={id} post={posts[id]}/>
        })}
    </section>
)

export default WritingList
