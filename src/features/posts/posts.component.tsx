import { FC } from 'react'
import { Switch, Route } from 'react-router-dom'

import PostsList from './postsList.component'
import PostsContent from './postsContent.component'

const Posts: FC = () => {
    return (
        <Switch>
            <Route exact path={'/posts'} component={PostsList} />
            <Route path={'/posts/:id'} component={PostsContent} />
        </Switch>
    )
}

export default Posts
