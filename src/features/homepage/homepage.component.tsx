import { h } from 'preact'

import { useAppSelector, useAppDispatch } from 'src/app/store'
import sum from 'src/utilities/sum'

import { increment, decrement } from './homepage.slice'

const Homepage: React.FC = () => {

    const dispatch = useAppDispatch()
    const counter = useAppSelector((state) => state.homepage.counter)

    return (
        <h1>
            Count is { sum(1, counter) }
            <div onClick={() => dispatch(increment({interval: 2}))}>
              INCREMENT
            </div>
            <div onClick={() => dispatch(decrement({interval: 2}))}>
              DECREMENT
            </div>
        </h1>
    )
}

export default Homepage
