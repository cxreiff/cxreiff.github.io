import { FC } from 'react'
import { Switch, Route } from 'react-router-dom'

import WritingList from './writingList.component'
import WritingContent from './writingContent.component'

const Writing: FC = () => {
    return (
        <Switch>
            <Route exact path={'/writing'} component={WritingList} />
            <Route path={'/writing/:id'} component={WritingContent} />
        </Switch>
    )
}

export default Writing
