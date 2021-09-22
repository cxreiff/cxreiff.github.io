import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import 'normalize.css'

import store from './store'
import history from './history'

import Layout from '~/src/features/layout/layout.component'

const App: React.FC = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Layout/>
        </ConnectedRouter>
    </Provider>
)

export default App
