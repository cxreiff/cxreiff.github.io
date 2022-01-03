import { FC } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import store from './store'
import history from './history'

const Wrapper: FC = ({children}) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {children}
      </ConnectedRouter>
    </Provider>
  )
}

export default Wrapper
