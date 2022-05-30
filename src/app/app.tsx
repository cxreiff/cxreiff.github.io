import { FC } from 'react'

import { Theme } from '~/src/features/theme/theme.component'
import { Layout } from '~/src/features/layout/layout.component'
import { Wrapper } from './wrapper'
import { Routing, ROUTES } from './routing'

const App: FC = () => {
    return (
        <Wrapper>
            <Theme>
                <Layout routes={ROUTES}>
                    <Routing />
                </Layout>
            </Theme>
        </Wrapper>
    )
}

export default App
