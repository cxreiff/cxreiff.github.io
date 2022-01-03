import { FC } from 'react'
import 'normalize.css'

import Wrapper from './wrapper'
import Layout from '~/src/features/layout/layout.component'

const App: FC = () => (
  <Wrapper>
    <Layout />
  </Wrapper>
)

export default App
