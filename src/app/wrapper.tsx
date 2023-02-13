import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

import store from './store'

type WrapperProps = {
  children?: ReactNode,
}

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <HashRouter>
        {children}
      </HashRouter>
    </Provider>
  )
}
