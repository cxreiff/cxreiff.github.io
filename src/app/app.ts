import { FC } from 'react'
import 'normalize.css'

import wrapper from './wrapper'
import Layout from '~/src/features/layout/layout.component'

const App: FC = () => wrapper(Layout)

export default App
