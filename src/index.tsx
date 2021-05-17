import { h, render } from 'preact'

import sum from 'src/sum'

const App = () => <h1>hello world! 2 + 4 = {sum(2, 4)}</h1>

render(<App/>, document.getElementById('root'))
