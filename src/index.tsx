import { h, render } from 'preact'

import sum from 'src/sum'

const App = () => <h1>hello world! 1 + 2 = {sum(1, 2)}</h1>

render(<App/>, document.getElementById('root'))
