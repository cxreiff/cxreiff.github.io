import { FC } from 'react'

import { Layout } from '~/src/features/layout/layout.component'
import { Wrapper } from './wrapper'
import { Filters } from './filters'
import { Routing, ROUTES } from './routing'

const App: FC = () => {
    return (
        <Wrapper>
            <Layout routes={ROUTES}>
                <Routing />
            </Layout>
            <Filters />
        </Wrapper>
    )
}

export default App
