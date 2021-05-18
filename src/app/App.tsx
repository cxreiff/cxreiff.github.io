import { h } from 'preact'
import { Provider } from 'react-redux'

import Homepage from 'src/features/homepage/homepage.component'

import store from './store'

const App: React.FC = () => (
    <Provider store={store}>
        <Homepage/>
    </Provider>
)

export default App
