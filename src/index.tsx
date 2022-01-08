if (process.env.NODE_ENV === 'development') {
  require('preact/debug')
}

import h, { render } from 'preact'

import App from '~/src/app/app'

import './index.scss'

render(<App />, document.getElementById('root')!)
