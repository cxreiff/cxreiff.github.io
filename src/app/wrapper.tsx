import { FC } from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

import store from './store'

export const Wrapper: FC = ({children}) => {
  return (
    <Provider store={store}>
      <HashRouter>
        {children}
      </HashRouter>
    </Provider>
  )
}
