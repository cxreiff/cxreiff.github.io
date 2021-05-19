import { h } from 'preact'
import { Provider } from 'react-redux'
import { Route, Switch, Link } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import store from './store'
import history from './history'

import Homepage from 'src/features/homepage/homepage.component'
import Writing from 'src/features/writing/writing.component'


const App: React.FC = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <nav>
                <ul>
                    <li><Link to='/'>Homepage</Link></li>
                    <li><Link to='/writing'>Writing</Link></li>
                </ul>
            </nav>
            <main>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route path="/writing" component={Writing}/>
                </Switch>
            </main>
        </ConnectedRouter>
    </Provider>
)

export default App
