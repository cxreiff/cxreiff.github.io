import { FC } from 'react'
import 'normalize.css'

import { Layout } from '~/src/features/layout/layout.component'
import { Wrapper } from './wrapper'
import { Routing, ROUTES } from './routing'

const App: FC = () => {
    return (
        <Wrapper>
            <Layout routes={ROUTES}>
                <Routing />
            </Layout>
        </Wrapper>
    )
}

export default App
