import React, { ComponentType, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import store from '~/src/app/store';
import history from '~/src/app/history';

const wrapComponent = (Component: ComponentType, props = {}): ReactElement => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Component {...props} />
      </ConnectedRouter>
    </Provider>
  )
}

export default wrapComponent
